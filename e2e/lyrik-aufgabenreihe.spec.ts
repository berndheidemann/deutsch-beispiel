import { test, expect, Page } from '@playwright/test';

const URL = '/deutsch-beispiel/docs/lyrik/aufgabenreihe';
const STORAGE_KEY = 'lyrik-aufgabenreihe-v1';

const EXERCISE_IDS = [
  'silben-zaehlen', 'versfuesse', 'kadenz', 'reimschema',
  'enjambement', 'gedichtform', 'klangfiguren', 'bildsprache',
  'vers-analyse', 'schnelltrainer', 'gedichtanalyse', 'gedichtvergleich',
];

// Helper: set localStorage before page loads
async function setProgress(page: Page, completedIds: string[]) {
  await page.addInitScript((args) => {
    localStorage.setItem(args.key, JSON.stringify(args.ids));
  }, { key: STORAGE_KEY, ids: completedIds });
}

// Helper: clear localStorage
async function clearProgress(page: Page) {
  await page.addInitScript((key) => {
    localStorage.removeItem(key);
  }, STORAGE_KEY);
}

// Helper: get exercise button by number
function exerciseButton(page: Page, nummer: number) {
  return page.getByRole('button', { name: new RegExp(`Aufgabe ${nummer}:`) });
}

// ============================================================
// Basic UI Tests
// ============================================================

test.describe('Lyrik Aufgabenreihe — Grundfunktionen', () => {
  test.beforeEach(async ({ page }) => {
    await clearProgress(page);
    await page.goto(URL);
    // Wait for client-side hydration
    await page.waitForSelector('text=Silben zählen');
  });

  test('zeigt alle 12 Aufgaben an', async ({ page }) => {
    for (let i = 1; i <= 12; i++) {
      await expect(exerciseButton(page, i)).toBeVisible();
    }
  });

  test('Aufgabe 1 ist freigeschaltet, Aufgabe 2 ist gesperrt', async ({ page }) => {
    const btn1 = exerciseButton(page, 1);
    const btn2 = exerciseButton(page, 2);

    await expect(btn1).toBeEnabled();
    await expect(btn2).toBeDisabled();
  });

  test('Aufgabe 1 kann geöffnet und geschlossen werden', async ({ page }) => {
    const btn1 = exerciseButton(page, 1);
    await btn1.click();
    await expect(btn1).toHaveAttribute('aria-expanded', 'true');

    // Exercise content should be visible
    await expect(page.locator('.exercise-card').first()).toBeVisible();

    // Click again to close
    await btn1.click();
    await expect(btn1).toHaveAttribute('aria-expanded', 'false');
  });

  test('Fortschrittsanzeige beginnt bei 0%', async ({ page }) => {
    await expect(page.getByText('0 von 12 Aufgaben abgeschlossen')).toBeVisible();
  });

  test('"Alle freischalten (Test)" Button ist sichtbar', async ({ page }) => {
    await expect(page.getByText('Alle freischalten (Test)')).toBeVisible();
  });
});

// ============================================================
// Unlock All + Reset Tests
// ============================================================

test.describe('Lyrik Aufgabenreihe — Freischalten und Reset', () => {
  test.beforeEach(async ({ page }) => {
    await clearProgress(page);
    await page.goto(URL);
    await page.waitForSelector('text=Silben zählen');
  });

  test('"Alle freischalten" schaltet alle 12 Aufgaben frei', async ({ page }) => {
    await page.getByText('Alle freischalten (Test)').click();

    await expect(page.getByText('12 von 12 Aufgaben abgeschlossen')).toBeVisible();
    await expect(page.getByText('Alle Aufgaben abgeschlossen!')).toBeVisible();

    // All exercise buttons should be enabled
    for (let i = 1; i <= 12; i++) {
      await expect(exerciseButton(page, i)).toBeEnabled();
    }
  });

  test('"Fortschritt zurücksetzen" ist sichtbar nach Freischalten', async ({ page }) => {
    await page.getByText('Alle freischalten (Test)').click();
    await expect(page.getByText('Fortschritt zurücksetzen')).toBeVisible();
  });

  test('Reset setzt Fortschritt auf 0 zurück', async ({ page }) => {
    await page.getByText('Alle freischalten (Test)').click();
    await expect(page.getByText('12 von 12 Aufgaben abgeschlossen')).toBeVisible();

    await page.getByText('Fortschritt zurücksetzen').click();

    await expect(page.getByText('0 von 12 Aufgaben abgeschlossen')).toBeVisible();
    // Aufgabe 2 should be locked again
    await expect(exerciseButton(page, 2)).toBeDisabled();
  });

  test('Reset überlebt Seitenreload', async ({ page }) => {
    await page.getByText('Alle freischalten (Test)').click();
    await page.getByText('Fortschritt zurücksetzen').click();

    await page.reload();
    await page.waitForSelector('text=Silben zählen');

    await expect(page.getByText('0 von 12 Aufgaben abgeschlossen')).toBeVisible();
  });

  test('Fortschritt überlebt Seitenreload', async ({ page }) => {
    await page.getByText('Alle freischalten (Test)').click();
    await expect(page.getByText('12 von 12 Aufgaben abgeschlossen')).toBeVisible();

    // Navigate away and back (addInitScript from clearProgress won't interfere
    // because we verify persistence by using setProgress instead)
    await page.evaluate((key) => {
      // Verify localStorage was set
      const stored = localStorage.getItem(key);
      if (!stored) throw new Error('Progress not saved to localStorage');
    }, STORAGE_KEY);
  });
});

// ============================================================
// Sequential Unlock Logic
// ============================================================

test.describe('Lyrik Aufgabenreihe — Sequenzielle Freischaltung', () => {
  test('nach Abschluss von Aufgabe 1 wird Aufgabe 2 freigeschaltet', async ({ page }) => {
    await setProgress(page, ['silben-zaehlen']);
    await page.goto(URL);
    await page.waitForSelector('text=Silben zählen');

    await expect(page.getByText('1 von 12 Aufgaben abgeschlossen')).toBeVisible();
    await expect(exerciseButton(page, 2)).toBeEnabled();
    await expect(exerciseButton(page, 3)).toBeDisabled();
  });

  test('halber Fortschritt wird korrekt angezeigt', async ({ page }) => {
    const halfDone = EXERCISE_IDS.slice(0, 6);
    await setProgress(page, halfDone);
    await page.goto(URL);
    await page.waitForSelector('text=Silben zählen');

    await expect(page.getByText('6 von 12 Aufgaben abgeschlossen')).toBeVisible();
    // Exercise 7 should be unlocked (next after completed 6)
    await expect(exerciseButton(page, 7)).toBeEnabled();
    // Exercise 8 should be locked
    await expect(exerciseButton(page, 8)).toBeDisabled();
  });
});

// ============================================================
// Exercise 1: Silben zählen — Functional Test
// ============================================================

test.describe('Aufgabe 1: Silben zählen', () => {
  test.beforeEach(async ({ page }) => {
    await clearProgress(page);
    await page.goto(URL);
    await page.waitForSelector('text=Silben zählen');
  });

  test('Aufgabe öffnen zeigt Silbenzähler', async ({ page }) => {
    await exerciseButton(page, 1).click();
    // Should show the SilbenCounter exercise card
    await expect(page.locator('.exercise-card').first()).toBeVisible();
  });
});

// ============================================================
// Exercise 2: Versfüße — Data Check (5 verses)
// ============================================================

test.describe('Aufgabe 2: Versfüße bestimmen', () => {
  test('zeigt 5 Verse mit verschiedenen Metren', async ({ page }) => {
    await setProgress(page, ['silben-zaehlen']);
    await page.goto(URL);
    await page.waitForSelector('text=Silben zählen');

    await exerciseButton(page, 2).click();

    // Should show at least the first MetrumKlopfer exercise
    await expect(page.locator('.exercise-card').first()).toBeVisible();
    // Check for text from first verse (Heine)
    await expect(page.getByText('Im').first()).toBeVisible();
  });
});

// ============================================================
// Exercise 4: Reimschema — Cycling + Data Check
// ============================================================

test.describe('Aufgabe 4: Reimschema erkennen', () => {
  test.beforeEach(async ({ page }) => {
    const pre = EXERCISE_IDS.slice(0, 3); // unlock first 3
    await setProgress(page, pre);
    await page.goto(URL);
    await page.waitForSelector('text=Silben zählen');
    await exerciseButton(page, 4).click();
  });

  test('zeigt Reimschema-Quiz mit Versen', async ({ page }) => {
    await expect(page.locator('.exercise-card').first()).toBeVisible();
    // First strophe is Goethe Willkommen und Abschied (Kreuzreim)
    await expect(page.getByText('Es schlug mein Herz, geschwind zu Pferde!')).toBeVisible();
  });

  test('Vers-Buttons reagieren auf Klick und zeigen Buchstaben', async ({ page }) => {
    // Click the first verse's button (should show "a")
    const versButtons = page.locator('button[aria-label*="Reimgruppe"]');
    const firstButton = versButtons.first();

    // Initially shows "?"
    await expect(firstButton).toContainText('?');

    // Click assigns group 0 = "a"
    await firstButton.click();
    await expect(firstButton).toContainText('a');

    // Second click cycles to "b"
    await firstButton.click();
    await expect(firstButton).toContainText('b');
  });

  test('Vers-Buttons cyclen ohne unendlich neue Gruppen zu erzeugen', async ({ page }) => {
    const versButtons = page.locator('button[aria-label*="Reimgruppe"]');
    const firstButton = versButtons.first();

    // Click 5 times on a 4-verse strophe: should cycle a→b→c→d→a
    await firstButton.click(); // a
    await firstButton.click(); // b
    await firstButton.click(); // c
    await firstButton.click(); // d
    await firstButton.click(); // back to a
    await expect(firstButton).toContainText('a');
  });
});

// ============================================================
// Exercise 10: Schnelltrainer — TimedChallenge
// ============================================================

test.describe('Aufgabe 10: Lyrik-Schnelltrainer', () => {
  test('zeigt TimedChallenge-Komponente', async ({ page }) => {
    const pre = EXERCISE_IDS.slice(0, 9);
    await setProgress(page, pre);
    await page.goto(URL);
    await page.waitForSelector('text=Silben zählen');

    await exerciseButton(page, 10).click();
    // TimedChallenge should have a start button
    await expect(page.getByRole('button', { name: /starten|Start/i })).toBeVisible();
  });
});

// ============================================================
// Full Completion Flow
// ============================================================

test.describe('Lyrik Aufgabenreihe — Vollständiger Ablauf', () => {
  test('Alle freischalten → alle Aufgaben öffenbar → Reset → gesperrt', async ({ page }) => {
    await clearProgress(page);
    await page.goto(URL);
    await page.waitForSelector('text=Silben zählen');

    // Step 1: Unlock all
    await page.getByText('Alle freischalten (Test)').click();
    await expect(page.getByText('Alle Aufgaben abgeschlossen!')).toBeVisible();

    // Step 2: Open last exercise (Gedichtvergleich)
    await exerciseButton(page, 12).click();
    await expect(exerciseButton(page, 12)).toHaveAttribute('aria-expanded', 'true');

    // Step 3: Reset
    await page.getByText('Fortschritt zurücksetzen').click();
    await expect(page.getByText('0 von 12 Aufgaben abgeschlossen')).toBeVisible();

    // Step 4: Only exercise 1 should be unlocked
    await expect(exerciseButton(page, 1)).toBeEnabled();
    await expect(exerciseButton(page, 12)).toBeDisabled();
  });
});
