import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  try {
    // You can remove the Stripe-related logic entirely if you don't need it
    // const event = stripe.webhooks.constructEvent(
    //   body,
    //   signature,
    //   process.env.STRIPE_WEBHOOK_SECRET!,
    // );

    // If you don't need any Stripe-related checks, you can remove the try-catch block
    // and directly handle the webhook event.

    // const session = event.data.object as Stripe.Checkout.Session;

    // Remove the entire if block related to "checkout.session.completed"
    // if (event.type === "checkout.session.completed") {
    //   // ... removed code ...
    // }

    // Remove the entire if block related to "invoice.payment_succeeded"
    // if (event.type === "invoice.payment_succeeded") {
    //   // ... removed code ...
    // }

  } catch (error) {
    return new NextResponse("Webhook error", { status: 400 });
  }

  return new NextResponse(null, { status: 200 });
}
