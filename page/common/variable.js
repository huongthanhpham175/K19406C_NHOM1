const Myfunctions = require('./functions')
module.exports = {
    email: 'quantt19406c@st.uel.edu.vn',
    password: 'Trantrungquan2001',
    companyName: 'K19406C_NHOM1' + Myfunctions.randomNumber(1, 100),
    website: 'https://' + Myfunctions.randomString(3) + '.com.vn'
}