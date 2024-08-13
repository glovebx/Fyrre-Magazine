'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TSubscribeNewsletterSchema,
  subscribeNewsletterSchema,
} from "@/lib/types";

type SubscribeProps = {
  formClassName?: string;
  formFieldsClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
};

export default function NewsletterSignUp({
  formClassName,
  formFieldsClassName,
  inputClassName,
  buttonClassName,
}: SubscribeProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSubscribeNewsletterSchema>({
    resolver: zodResolver(subscribeNewsletterSchema),
  });

  const [subscribed, setSubscribed] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async (data: TSubscribeNewsletterSchema) => {

    try {
      const templateParams = {
        message: `${data.source}: ${data.email}`
      };

      const response = await emailjs.send(
        'service_ktyctdj',
        'template_quhzrgl',
        // form.current ?? '',
        templateParams,
        'ZSaU-tQqmGNosS6qx',
      );

      if (response.text !== 'OK') {
        // setLoading(false);
        form.current && form.current.reset();
        throw new Error(response.text);
      }
      setSubscribed(true);
      form.current && form.current.reset();
      return;
    } catch (error) {
      // setLoading(false);
      form.current && form.current.reset();
      throw new Error('Something went wrong.');
    }

    // const response = await fetch("/api/subscribe", {
    //   method: "POST",
    //   body: JSON.stringify({ email: data.email }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const responseData = await response.json();

    // if (!response.ok) {
    //   alert("Email subscription form failed");
    //   return;
    // }

    // if (responseData.errors) {
    //   const errors = responseData.errors;
    //   if (errors.email) {
    //     setError("email", {
    //       type: "server",
    //       message: errors.email,
    //     });
    //   } else {
    //     alert("Something went wrong");
    //   }
    // }
    // // reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={form} className={`${formClassName}`}>
      <div className={`${formFieldsClassName}`}>
        <fieldset className="flex flex-col">
          <Input
            {...register("email")}
            className={`mb-2 ${inputClassName}`}
            type="text"
            placeholder="Email Address"
            name="email"
          />
        </fieldset>  
        <fieldset className="flex flex-col">
          <Input
            {...register("source")}
            className={`mb-2 ${inputClassName} hidden`}
            type="text"
            value="guluart"
            name="source"
          />
        </fieldset>
        <Button
          disabled={isSubmitting || subscribed}
          type="submit"
          className={`disabled:cursor-none ${buttonClassName}`}
        >
          {subscribed ? 'Subscribed!' : 'Sign Up'}
        </Button>
      </div>
      {errors.email && (
        <p className="text-red-500 mb-2">{`${errors.email.message}`}</p>
      )}
    </form>
  );
}
