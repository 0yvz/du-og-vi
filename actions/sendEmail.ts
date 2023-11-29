"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get("senderEmail");
	const message = formData.get("message");
	const firstName = formData.get("firstName");
	const lastName = formData.get("lastName");

	// simple server-side validation
	if (!validateString(firstName, 30)) {
		return {
			error: "Feil navn",
		};
	}
	if (!validateString(lastName, 30)) {
		return {
			error: "Feil etternavn",
		};
	}
	if (!validateString(senderEmail, 500)) {
		return {
			error: "Feil med epost fra sender",
		};
	}
	if (!validateString(message, 5000)) {
		return {
			error: "Feil med melding",
		};
	}

	let data;
	try {
		data = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "oyvindg@live.no",
			subject: "Ny melding på Du&Vi",
			reply_to: senderEmail,
			react: React.createElement(ContactFormEmail, {
				firstName: firstName,
				lastName: lastName,
				message: message,
				senderEmail: senderEmail,
			}),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		data,
	};
};
