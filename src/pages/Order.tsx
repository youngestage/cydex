import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Package, Bike, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  pickupAddress: z.string().min(5, "Pickup address must be at least 5 characters"),
  dropoffAddress: z.string().min(5, "Dropoff address must be at least 5 characters"),
  packageDetails: z.string().min(10, "Please provide more details about your package"),
  deliveryMethod: z.enum(["bicycle", "electric"]),
});

const Order = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      deliveryMethod: "bicycle",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Order Submitted!",
      description: "We'll process your eco-friendly delivery request right away.",
    });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="font-clash text-4xl font-semibold mb-4">
            Place Your Eco-Friendly Delivery Order
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Experience fast, reliable, and sustainable delivery solutions tailored for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <CardContent className="space-y-2 text-center">
              <MapPin className="mx-auto h-8 w-8 mb-2 text-cydex-primary" />
              <h3 className="font-semibold">Real-Time Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your delivery in real-time with our live tracking system.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="space-y-2 text-center">
              <Bike className="mx-auto h-8 w-8 mb-2 text-cydex-primary" />
              <h3 className="font-semibold">Eco-Friendly Options</h3>
              <p className="text-sm text-muted-foreground">
                Choose from our bicycle or electric fleet for a greener delivery.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="space-y-2 text-center">
              <Package className="mx-auto h-8 w-8 mb-2 text-cydex-primary" />
              <h3 className="font-semibold">Fast and Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Every delivery is timely, secure, and planet-friendly.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="font-clash text-2xl font-semibold mb-6">Your Delivery, Your Way</h2>
          <p className="text-muted-foreground mb-8">
            Fill out the details below to get started. With just a few clicks, you can choose your pickup and drop-off locations.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="pickupAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pickup Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter pickup location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dropoffAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dropoff Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter delivery location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="packageDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Package Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your package (size, weight, special handling requirements)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deliveryMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="bicycle" id="bicycle" />
                          <label htmlFor="bicycle" className="flex items-center space-x-2 cursor-pointer">
                            <Bike className="h-5 w-5" />
                            <span>Bicycle Delivery</span>
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4">
                          <RadioGroupItem value="electric" id="electric" />
                          <label htmlFor="electric" className="flex items-center space-x-2 cursor-pointer">
                            <Zap className="h-5 w-5" />
                            <span>Electric Vehicle</span>
                          </label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-cydex-primary hover:bg-cydex-primary/80 text-black">
                Place Your Order
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Order;