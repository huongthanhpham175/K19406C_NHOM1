module.exports = {
    dangxuatText: "//span[text()='Đăng xuất']",
    logoDiv: "//div[contains(@class,'div-portfolio ')]",
    createNewCompanyButton: "//button//span[text()[contains(.,'Tạo một doanh nghiệp')]]",
    changeCompanyButton: "//button[contains(@class,'mat-menu-item') and contains(text(),'Chuyển doanh nghiệp')]",
    addNewButton: "//a[contains(@class,'mat-list-item')]//div//span[text()='Thêm mới']",
    profileNameLabel: "//a[contains(@class,'mat-list-item')]//div//span[contains(@class,'mat-tooltip-trigger text-sm pl-3 ng-star-inserted')]",
    // settingTab: "//span[contains(@class,'mat-content')]//p[contains(text(),'Thiết lập')]",
    // profileTitle: "//h4[contains(text(),'Hồ sơ doanh nghiệp')]",
    // fullNamefield: "//div[@class='full-name']//input[@formcontrolname='fullName']",
    // doneIcon: "//div[@class='full-name']//mat-icon[contains(text(),'done')]",
    // uploadFileButton: "//input[@type='file']",
    // imageCropper: "//image-cropper//div[@class='move']",
    // saveImageButton: "//button//span[contains(text(),'Lưu hình ảnh')]",
    // profileImage: "//div[@class='profile']//img",
    // menuIcon: "//button[contains(@class,'mat-focus-indicator')]//span[@class='mat-button-wrapper']//mat-icon[text()='menu']",
    // memberTab: "//a[contains(@class,'mat-list-item')]//span[contains(text(),'Thành viên')]",
    // memberListTitle: "//h4[contains(text(),'Danh sách thành viên')]",
    // addNewMemberButton: "//button//span[text()='Thêm thành viên']",
    // emailField: "//input[@formcontrolname='email']",
    // searchMemberButton: "//button//span[contains(text(),'Tìm')]",
    // inviteMemberButton: "//button//span[contains(text(),'Mời')]",
    // memberLastRow: "//tbody[@role='rowgroup']//tr[last()]",
    // deleteButtonbyMemberName(membername) { return `//tbody[@role='rowgroup']//ancestor::td/following-sibling::td//span[contains(text(),'Xóa')]` },
    // acceptDeleteButton: "//div[@class='cdk-overlay-pane']//button//span[contains(text(),'Đồng ý')]",
    anotherSettingTab: "//a[contains(@class,'mat-list-item')]//span[contains(text(),'Thiết lập khác')]",
    anotherSettingTitle: "//h4[contains(text(),'Thiết lập khác')]",
    companyListTitle: "//div[@class='portfolio-container']//h4[contains(text(),'Danh sách doanh nghiệp')]",
    companyFirst: "(//table//tbody//tr)[1]"
}