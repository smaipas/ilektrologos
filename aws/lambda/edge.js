'use strict';

module.exports.viewerResponse = (event, context, callback) => {
  const response = event.Records[0].cf.response;

  response.headers['strict-transport-security'] = [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=31536000; includeSubDomains',
    },
  ];

  response.headers['content-security-policy'] = [
    {
      key: 'Content-Security-Policy',
      value: "default-src 'self'",
    },
  ];

  response.headers['x-xss-protection'] = [
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
    },
  ];

  response.headers['x-content-type-options'] = [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
  ];

  response.headers['x-frame-options'] = [
    {
      key: 'X-Frame-Options',
      value: 'DENY',
    },
  ];

  callback(null, response);
};
