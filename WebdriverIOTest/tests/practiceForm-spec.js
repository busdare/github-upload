import practiceFormPage from '../PageModel/PracticeFormPage'

describe("Practice Form Code Challenge", () => {

    it('should allow use to fill and submit the practice form', () => {
        browser.url('https://demoqa.com/automation-practice-form')
        let firstName = $(practiceFormPage.firstNameField);
        let lastName = $(practiceFormPage.lastNameField);
        let userEmail = $(practiceFormPage.emailAddressField);
        let maleRadioBtn = $(practiceFormPage.maleRadioBtn);
        let mobileNumber = $(practiceFormPage.mobileNumberField);
        let dateOfBirth = $(practiceFormPage.dateOfBirthField)
        let dateOfBirthDay = $(practiceFormPage.dateOfBirthDay)
        let subject = $(practiceFormPage.subjectsField);
        let subjectOpt = $(practiceFormPage.subjectsFieldOpt);
        let sportsChkBox = $(practiceFormPage.sportsCheckbox);
        let currentAddress = $(practiceFormPage.currentAddressTextArea);
        let chooseFileBtn = $(practiceFormPage.chooseFileBtn);
        let stateDDownBtn = $(practiceFormPage.stateDDownBtn);
        let stateDDownOpt = $(practiceFormPage.stateDDownOpt);
        let cityDDownBtn = $(practiceFormPage.cityDDownBtn);
        let cityDDownOpt = $(practiceFormPage.cityDDownOpt);
        let submitBtn = $(practiceFormPage.submitBtn);
        let confirmModalTitle = $(practiceFormPage.confirmModalTitle);

        firstName.waitForExist();
        firstName.addValue('James');
        lastName.addValue('Camilo');
        userEmail.addValue('jcamilo@codechallenge.com');
        maleRadioBtn.click();
        mobileNumber.addValue('5112348765')
        dateOfBirth.click();
        dateOfBirthDay.click();
        subject.scrollIntoView();
        subject.click();
        browser.keys(" ");
        subjectOpt.click();
        sportsChkBox.click();
        chooseFileBtn.setValue(practiceFormPage.filePath);
        currentAddress.addValue('Code Challenge Street');
        stateDDownBtn.click();
        stateDDownOpt.click();
        cityDDownBtn.click();
        cityDDownOpt.click();
        submitBtn.click();
        expect(confirmModalTitle).toHaveText(practiceFormPage.confirmModalTitleText);
        browser.saveScreenshot('./screenshot/form.png');   
    })
})