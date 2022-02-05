

// function sendMail(){
//     var data = {
//         service_id: 'service_07opv3h',
//         template_id: 'template_gjgb84h',
//         user_id: 'user_KZ4ykm8JKiuEIIhuGt46o',
//         template_params: {
//             'username': 'James',
//             'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//         }
//     };
     
//     $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//         type: 'POST',
//         data: JSON.stringify(data),
//         contentType: 'application/json'
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// }

