import { NextResponse } from "next/server"
export async function POST(req,res){
  const data  = await req.json()
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
      user:'euzensolutions1@gmail.com',
      pass:'uflz ijyk zorr ccps',

    },
    secure:true,
  })
  const mailData = {   
    from: `${data.email}`,
    to: 'inquiry@ignytessolutions.com',
    subject: "New Customer",
    text: " | Sent from: " + data.name + " | Email: " + data.email,
    html: `<div>Name: <h4>${data.name}</h4></div><p>Sent from:
    ${data.email}</p><p>message: ${data.message}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      {console.log(err)
      console.log("error is raised")}
    else
      console.log(info)
  })
  // res.status(200)

  


  return NextResponse.json(data)
}