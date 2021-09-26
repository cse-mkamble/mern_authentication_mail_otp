module.exports = mailMessage = (mailBody) => {
    return `
        <div>
            <div style=" background: #005CE4; width:100%;">
                <div style=" padding: 20px 5px; ">
                    <div>
                        <div style=" text-align: center; padding: 0 0 10px; ">
                            <h1 style="color: #fff;">${process.env.APP_NAME}</h1>
                        </div>
                        <div>
                            <div style="background: #fff;
                            padding: 10px 20px;
                            border-radius: 10px;
                            margin: 5px;
                            text-align: center;">
                                <div style="min-height: 300px;">
                                    <div>${mailBody}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div style="text-align: center; color: white; ">
                        <div>If you encounter any problem, please contact us at <strong>${process.env.CONTACT_US}</strong> </div>
                        <br />
                        <div>©2021 ${process.env.APP_NAME}. All rights reserved.</div>
                        <div style="text-align: end; color: white; margin: 20px 40px 0;">${Date.now()}</div>
                    </div>
                </div>
            </div>
        </div>
    `
}