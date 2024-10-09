"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast, useToast } from "@/hooks/use-toast";
import { Key } from "lucide-react";

const FormSchema = z.object({
	name: z.string({
    required_error: "Please enter a name"
	}).min(2, {
    message: "name must be more than 2 characters long"
	}).max(20, {
    message: "name must be no longer than 20 characters"
  }),
    question2: z.string({
      required_error: "Please select an option"
  }),
    question3: z.string({
      required_error: "Please select an option"
  }),
    question4: z.string({
      required_error: "Please select an option"
  })
})
 
export default function Quiz() {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
    	resolver: zodResolver(FormSchema)
	})

  function showToast(isCorrect: boolean, name: string) {
    const title = isCorrect ? `Congratulations ${name}` : `Sorry ${name}`;
    const description = isCorrect ? "You are correct" : "Unfortunately you are not correct";
    
    toast({
        title,
        description,
    });
  }

	function onSubmit(data: z.infer<typeof FormSchema>) {
    	toast({
        	title: "hello",
        	description: "You have submitted the quiz... validating",
    	})
    	console.log(data);
      const answers: { [key in keyof typeof FormSchema]: string } = {
        question2: "None of the above",
        question3: "Use of drugs for purposes other than those for which they are meant to be used or in excessive amounts",
        question4: "All of the above"
    };

    /// Validate each question
    for (const [key, correctAnswer] of Object.entries(answers) as [keyof typeof FormSchema, string][]) {
      showToast(data[key] === correctAnswer, data.name);
  }
}
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 1:</FormLabel>
              <FormDescription>What is your name?</FormDescription>
                <FormControl>
                  <Input placeholder="your name here" {...field}/>
                </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question2"
          render={({ field }) => (
          <FormItem>
            <FormLabel>Question 2:</FormLabel>
            <FormDescription>Which are not drugs?</FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an answer"/>
                      </SelectTrigger>
                </FormControl>
                  <SelectContent>
                    <SelectItem value="Painkillers">Painkillers</SelectItem>
                    <SelectItem value="Cannabis">Cannabis</SelectItem>
                    <SelectItem value="Ecstasy">Ecstasy</SelectItem>
                    <SelectItem value="Methamphetamine">Methamphetamine</SelectItem>
                    <SelectItem value="None of the above">None of the above</SelectItem>
                  </SelectContent>
                </Select>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question3"
          render={({ field }) => (
          <FormItem>
            <FormLabel>Question 3:</FormLabel>
            <FormDescription>What is drug abuse?</FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an answer"/>
                      </SelectTrigger>
                </FormControl>
                  <SelectContent>
                    <SelectItem value="Excessive consumption of drugs that is harmful to the individual or others">Excessive consumption of drugs that is harmful to the individual or others</SelectItem>
                    <SelectItem value="Use of drugs for purposes other than those for which they are meant to be used or in excessive amounts">Use of drugs for purposes other than those for which they are meant to be used or in excessive amounts</SelectItem>
                    <SelectItem value="Consumption of drugs until health complications occur">Consumption of drugs until health complications occur</SelectItem>
                  </SelectContent>
                </Select>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question4"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 4:</FormLabel>
              <FormDescription>What is one effect of drug abuse?</FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an answer"/>
                      </SelectTrigger>
                </FormControl>
                  <SelectContent>
                    <SelectItem value="Nausea">Nausea</SelectItem>
                    <SelectItem value="Hallucination">Hallucination</SelectItem>
                    <SelectItem value="Memory loss">Memory loss</SelectItem>
                    <SelectItem value="Depression">Depression</SelectItem>
                    <SelectItem value="All of the above">All of the above</SelectItem>
                  </SelectContent>
                </Select>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        	</form>
    </Form>
	)
}