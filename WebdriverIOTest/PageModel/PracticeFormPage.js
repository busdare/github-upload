
class PracticeFormPage {
    constructor() {
        this.firstNameField = '#firstName';
        this.lastNameField = '#lastName';
        this.emailAddressField = '#userEmail';
        this.maleRadioBtn = '[for=gender-radio-1]';
        this.femaleRadioBtn = '[for=gender-radio-2]';
        this.otherRadioBtn = '[for=gender-radio-3]';
        this.mobileNumberField = '#userNumber';
        this.dateOfBirthField = '#dateOfBirthInput'
        this.dateOfBirthDay = 'div.react-datepicker__day.react-datepicker__day--010'
        this.subjectsField = '.subjects-auto-complete__value-container';
        this.subjectsFieldOpt = '#react-select-2-option-0'
        this.sportsCheckbox = '[for=hobbies-checkbox-1]';
        this.readingCheckbox = '[for=hobbies-checkbox-2]';
        this.musicCheckbox = '[for=hobbies-checkbox-3]';
        this.currentAddressTextArea = '#currentAddress';
        this.submitBtn = '#submit';
        this.chooseFileBtn = '#uploadPicture';
        this.filePath = "C:\\Development\\WebdriverIOTest\\lib\\bandit.jpg";
        this.stateDDownBtn = 'div#state svg.css-19bqh2r';
        this.stateDDownOpt = '#react-select-3-option-2';
        this.cityDDownBtn = 'div#city svg.css-19bqh2r';
        this.cityDDownOpt = '#react-select-4-option-0';
        this.confirmModalTitle = '#example-modal-sizes-title-lg';
        this.confirmModalTitleText = 'Thanks for submitting the form';
    }
}

export default new PracticeFormPage();