

import { test, expect , Page } from '@playwright/test';

test('Google search for automation and validate Wikipedia page', async ({page}) => {

  //Open Google and validate the title

  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle('Google');


  //Accept cookies
  const changeLanguage=page.getByRole('button', { name: 'Idioma: ‪Español (España)‬' });
  const acceptButton = page.getByRole('button', { name: 'Accept all' });
  const englishLink=page.getByRole('menuitem', { name: '‪English (United Kingdom)‬' }).first();

 if (await changeLanguage.isVisible({ timeout: 1000 })) {
    await changeLanguage.click();
    await englishLink.click();
    await acceptButton.click();
    
    console.log('Cookies accepted.');
  } else {
    console.log('No cookie displayed.');
  }

  //Manually verify the robot verification
  
  const searchField= page.locator('#APjFqb');
  await searchField.click();
  await searchField.fill('automation');
  console.log('For Robot verification manually putting some wait statement')
     await searchField.press('Enter');

   // wait statement is for manually verify the robot verification
    
    test.setTimeout(60000);
   
    // Validate wikipedia link and click on it 
   
  const wikipediaLink =page.getByRole('link', { name: 'Automation Wikipedia https://' });
  await wikipediaLink.waitFor({state: 'visible'});
  await wikipediaLink.click();
  await expect(page).toHaveTitle('Automation - Wikipedia');
  await page.getByText('In 1771 Richard Arkwright').scrollIntoViewIfNeeded();
  await page.getByText('In 1771 Richard Arkwright').highlight();
  console.log(await page.getByText('In 1771 Richard Arkwright').innerText());
  await page.screenshot({ path: 'C:/Users/Anuradha/playwright-demo/Screenshot/test1.png' });
  await page.pause();
});
