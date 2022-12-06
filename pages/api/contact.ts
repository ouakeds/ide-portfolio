import sgMail from "@sendgrid/mail";
import {NextApiRequest, NextApiResponse} from "next";

interface RequestDto {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ResponseDto {
  message: string;
}

const handleContactRequest = async (request : NextApiRequest, response : NextApiResponse<ResponseDto>) => {
  if (!process.env.SENDGRID_KEY || !process.env.SENDGRID_TEMPLATE_ID) {
    return response.redirect(302, "/contact?error=INVALID_SENDGRID_KEY");
  }

  const template = process.env.SENDGRID_TEMPLATE_ID;
  const body: RequestDto = request.body;
  const content = {
    name: body.name,
    email: body.email,
    subject: body.subject,
    message: body.message,
  }
  const mailContent = {
    to: [ "sabri.ouaked@resolver.fr"],
    from: "contact@resolver.fr",
    templateId: template,
    dynamic_template_data: content
  };
  sgMail.setApiKey(process.env.SENDGRID_KEY);

  try {
    await sgMail.send(mailContent);
  } catch (e) {
    return response.redirect(302, "/thanks");
  }
  return response.redirect(302, "/thanks");
};

export default handleContactRequest;
