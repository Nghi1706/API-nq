export const sendmail = async () => {
    //------
    const { google } = require('googleapis');
    const nodemailer = require('nodemailer');
    var CLIENT_ID = '637751409271-laqmbs66jtl6tcnknp20j15jsikggbs8.apps.googleusercontent.com';
    var CLIENT_SECRET = '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';
    var REDIRECT_URI = 'https://developers.google.com/oauthplayground';
    var REFRESH_TOKEN = '1//04jD7rtS0o89UCgYIARAAGAQSNwF-L9Ir7Fq06YBPA5cWTSdCeJUkgcqVJJLmbLfF3g_ld3v16QvnCQpP8FdBvB_kX48FWw0wCYI';
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    //------
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({ // config mail server
            service: "gmail",
            auth: {
                type: 'OAuth2',
                user: "nguyenvannghi17062000@gmail.com",
                //pass: "nguyenvannghi17062000",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            }
        });
        // const mail = window.event.srcElement.value;
        let info = await transport.sendMail({
            from: '"NhaKhoaN&Q" <nguyenvannghi17062000@gmail.com>', // sender address
            // to: `${mail}`, // list of receivers
            to: `nghi176000@gmail.com`,
            subject: "Nha khoa N&Q thông báo !", // Subject line
            text: "Kính chào quý khách, nha khoa N&Q hẹn gặp quý khách tại phòng khám để kiểm tra sức khoẻ răng miệng như lịch hẹn của mình đặt ra nhé! Kính chúc quý khách một ngày tốt lành! Trân trọng", // plain text body
            html: "<b>Lịch hẹn</b>", // html body
        });
        console.log(info);
    }
    catch (error) {
        console.error(error)
    }
}

