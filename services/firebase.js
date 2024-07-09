const admin = require("firebase-admin");
// const serviceAccount=require("../firebase_credentials.json");

//it can be use in env but for now is using for testing purpose

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "studymate-c1c09",
    private_key_id: "5dc2621cf8c5377ba3345aba045274ca95638444",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDESYXKsAdEXZvU\nWDOkc/gT6ee0LBCrr9ZlWA7ggZdCK4JW0f7rIyaM75TDhPGN/j8AyzDM3TTxDaQn\nDmYXiDoIjpn6MM95fgIs8UqiRzxSeXxgPTdjVqfBURoNnTTa5NwcxjrBFK3O7xI1\nbCktjNbDoykzDQFFRULGzl9NECkIRDvaxABL01sjk+HVFFpY2YKxjJwlLyzOYBfs\n5ep/Cgrnh+hyZhZakL9QCm2FPlt99EF/YJQH5YGOxJoHdstIpBL8gzoHAJypqjxv\nYOjfpQoDtmUzXbmBwzpw5fnEabjXNNGQ6O07Uz6xCIlZbhIph0mPy4nm6AAa/YI3\nBxuqPsj3AgMBAAECggEAYWy+r+40BS5TKI/IviDjanroCujuM1EY4H9XDv6zZV/0\nFwSu+uWc/knx9COZw2kEu2+e3qgS3WxwZARFDvwKFfI1odU1PW+aQ9VVvnsOCT+M\nSLZJthAuPojzHfu/3r/GMq//PJN3e2T1DDgNrjKf7EWhLtoPHeM1NDj9W2Igg51/\n5QYthwXbbXSKMIRdqAWtcmsvBKSey76xlevFRGl7H9Lffat0IG7k7sERHB1XLYwC\njE9nTkyV1bAbmih+ycry1zk/vtptvBDMxXLx+3wrKf3lnYUf4CBxJ73NfWNoQ8yI\nGlVPCx+IdS65B9WBFYlLZPoHieqeFCmY9l1rlQkeKQKBgQDlPiaqWyRj8FQ/RKd8\nrICs/SynOf93Rv6Jy2eYMBbTCsDK3yry0cbwmB57lbYHK14nCiTxDVXg4flb6wLR\nD4Y7MJg7qe7Dk97G3XEsRTzX+dyoSLZM6ZP5K6rjYh4aRCtzNSlu6eLaqpzGqExw\nc+5E12WcaZiN4z07FohcFdBPDwKBgQDbMqXq5P1Q5nYGCnEPLDBfDi26D2cyeW97\nh3VlOv1fyuGikPwL48YB4FiVey24MrAKzUyDUu0vdmqcufR7xvK/5dtZJrzW2Z/O\nN024mAt5P8WB2Ux4ny+4lBm+iIlg0xWdeBq6RcFgZTK8kY99baGa7OdSkYv/hpdx\neM02gAfnmQKBgHW9YiaFAT/DI8ILBOrnvn8a2WBaTXd5oyoqql5j9JUYJMUNsgVc\n8QyJVL6suf0crRLoBuk3rDAAYA5xudSeYJbt8oJSWStiOz1wZrwSI5nZ3xcfoWIH\nZdTINNDsiAF9mcNmPo2U2srsbfEqZ3gqUupQpwOayJu3Zq9+dzK0kXTJAoGATu1H\nzPKzO+Qf70DnQN1adX+3e118fTI4sDQwU0kQXuPApzapauaTL63Gd9yos8CcnucZ\ne9fqS8LJ1LEolUEnu21atBk8uegWoLxNIgCtcPVDeuPxoyU+m6nIM1EalmCrUc4j\nYZsobDtEL54CGtnU7OIM0TBTRqkB8vvaeJtVPVECgYEAof4MRFnJTLY9OYecndNJ\n9eZCP+6+O07A+VcstCwBc6GQLtg1kGPPVYTta+Hvajc087YKpXyo29m5+J0tPwwk\nWwYmadw3f0CbW04sytZpvbkTRCgNfsLlovM+IfU7t/jH6bwieE13c7uIbev0leCZ\nDxl0NqggZ/RwbigBc5VwPP4=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-fueap@studymate-c1c09.iam.gserviceaccount.com",
    client_id: "115061275673962529083",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fueap%40studymate-c1c09.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }),
});

module.exports = admin;
