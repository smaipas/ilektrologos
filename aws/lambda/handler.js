'use strict';

const AWS = require('aws-sdk');

const ses = new AWS.SES();
const FROM = 'contact@ilektrologos.online';
const TO = 'alexandrosmaipaselectrician@gmail.com';
const BCC = ['sotiris.maipas@gmail.com'];

// To create email template
// aws ses create-template --cli-input-json file://reservation_template.json --region eu-central-1

function generateResponse(code, payload) {
  return {
    statusCode: code,
    body: JSON.stringify(payload),
  };
}

function generateError(code, err) {
  console.log(err);
  return {
    statusCode: code,
    body: JSON.stringify(err.message),
  };
}

function generateEmailParams(data) {
  const { email, name } = data;
  if (!(email && name)) {
    throw new Error('Make sure to fill all required fields.');
  }

  return {
    Source: FROM,
    Destination: {
      ToAddresses: [TO],
      BccAddresses: BCC,
    },
    ReplyToAddresses: [email],
    Template: 'Ilektrologos_online_contact_template',
    TemplateData: JSON.stringify(data),
  };
}

module.exports.submitContactForm = async (event) => {
  try {
    const emailParams = generateEmailParams(event.body);
    const data = await ses.sendTemplatedEmail(emailParams).promise();
    if (data.statusCode && data.statusCode === 500) {
      throw new Error(
        'Something went wrong. Please try again or contact us through email.'
      );
    }
    return generateResponse(200, data);
  } catch (err) {
    return generateError(500, err);
  }
};
