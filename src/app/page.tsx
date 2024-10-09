import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words: string[] = ["heroin", "cocaine", "weed", "alcohol", "cigarettes"];

  return (
    <div>
      <div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
    	  <h1 className="font-bold text-5xl">Do you wan sum 
      	<FlipWords words={words}/>
    	  </h1>
        <h3>You've come to the right place</h3>
  	  </div>
      <div className="animate-bounce flex flex-row justify-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZvFmjbuVulUQPopAy-mmVH8_3deEp3DFdw&s" className="w-100 h-auto rounded-lg mb-2">
        </img>
        </div>
        <div className="flex flex-col justify-center h-dvh">
        <p className="font-bold text-3xl text-center"> Drugs bad </p>
        <p className="font-normal text-center"> Don't do drugs! </p>
        <br></br>
        <p className="font-normal text-center"> Drug abuse refers to the harmful or hazardous use of psychoactive substances, including alcohol and illicit drugs, leading to significant health, social, and economic consequences. It can result in addiction, physical and mental health issues, and strained relationships. To prevent falling into drug abuse, individuals can adopt strategies such as seeking healthy coping mechanisms for stress, staying informed about the risks of substance use, engaging in supportive social networks, and practicing self-reflection to recognize triggers. Establishing personal goals and pursuing fulfilling activities can also help reinforce a drug-free lifestyle.</p>
        <br></br>
        <p className="font-normal text-center"> So... drugs terrible!</p>
        <p className="font-normal text-center"> and you should not take it :0 </p>
      </div>
    </div>
  );
}