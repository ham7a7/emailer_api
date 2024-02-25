
<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px;">

<h1 style="color: #333;">Emailer API Documentation</h1>

<p style="color: #333;">This documentation provides an overview and usage guide for the Express.js API for sending email messages.</p>

<h2 style="color: #333;">Endpoints</h2>

<h3 style="color: #333;">1. Send Email</h3>

<p><strong>Endpoint:</strong> POST /send/message</p>

<p><strong>Description:</strong> This endpoint allows clients to send email messages.</p>

<h3 style="color: #333;">Request Body</h3>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px; overflow-x: auto;">
{
    "senderName": "The name of the sender of the email",
    "senderEmail": "The email of the sender",
    "message": "The message ",
    "receiverEmail": "receiver email coming from the clinet side"
}
</pre>

<h3 style="color: #333;">Response</h3>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px; overflow-x: auto;">
{
  "data":"Message sent"
}
</pre>

<h2 style="color: #333;">Usage</h2>

<p style="color: #333;">To send an email, make a POST request to the <code>/send/message</code> endpoint with the required parameters in the request body.</p>

<h3 style="color: #333;">Example Request using fetch function</h3>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px; overflow-x: auto;">
fetch('your_server_url/send/message', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "senderName": "The name of the sender of the email",
    "senderEmail": "The email of the sender",
    "message": "The message ",
    "receiverEmail": "receiver email coming from the clinet side"
})
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    console.error('There was an error!', error);
    return 'Sorry, An error occurred!';
  });

</pre>

<h3 style="color: #333;">Example Request using Axios</h3>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 4px; overflow-x: auto;">
 axios
        .post('your_server_url/send/message', {
    "senderName": "The name of the sender of the email",
    "senderEmail": "The email of the sender",
    "message": "The message ",
    "receiverEmail": "receiver email coming from the clinet side"
})
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return 'Sorry, An error occured!';
        })

</pre>


<h2 style="color: #333;">Dependencies</h2>

<ul style="color: #333;">
<li>Express.js</li>
<li>nodemailer</li>
<li>body-parser</li>
<li>cors</li>
<li>dotenv</li>
 <!-- Add any other dependencies or modules your API uses -->
</ul>


</body>

