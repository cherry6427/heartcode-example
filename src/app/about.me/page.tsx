"use client"

import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function aboutme() {

  const [showConfetti, setShowConfetti] = useState(false);

  // Function to handle the last item in the carousel
  const handleCarouselChange = (index) => {
    if (index === lastIndex) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
    }
  };

  // Assuming you have a total of 4 items in your carousel
  const lastIndex = 3; // Update this based on your actual carousel item count
  
  return (
    <div>
      {showConfetti && <Confetti />}
      <Card className="max-w-xl mx-auto max-h-fit bg-rose-50 drop-shadow-2xl">
        <Carousel onChange={handleCarouselChange}>
          <CarouselContent>
            <CarouselItem className="flex flex-col items-center justify-center min-h-screen">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMQFRUXGBAXFRYYFRUVFRUVFRUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHyUtLS0tLSstLSstKy0tLS0tLS0tLS0tLS0tLS0tLTctLS0tKy0tLS0tLSstKys3KzctLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xAA+EAABAwIEAwYEBQIEBgMAAAABAAIRAwQFEiExQVFhBhMicYGRMqGxwRRC0eHwUvEjYnKiFlNUkrLSBxUz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgICAgMBAAMBAAAAAAAAAAECEQMhEjETQVEiMmGBBP/aAAwDAQACEQMRAD8AtqeOUD+ePQhF0L2m8w1wJ+awLanRTULstII0I2K89JnouvR6CCllU2FY0KggiHCJ5HkVbgok2hxKRcAuhYwq5IlCxjikSpJRMIU2UpSLBEcU1OKaFjHJqcSmlAA0ppKcU1YIwpClKagE4pEpSFYwhTU4prlgDXJspU0omESJU0lBhFSLpSIGIG4VTcQBTE8IlTXnZykxhc4gHKXBodqY13JRtjfsbX7oiCQCHSAOJjziEuKWbK1SXgEDRoGgHEnqZVVVC7KbAKVHNoSHkA5S4HQdRx6LUMVR2fwtmU1HeIsL209gA1pOpjcySrZqDRmPSymyulAx0pQUkKzZhBNMvzAOAJAj0WoF0VqiqV2gwTBSULFwIe9xJ5BXGG3tFoIczxSTmyyCOvFJG2M1RVgzqFxWgFe2cCPABw8IaqG/r0+9LaZEADbaeid0hVbI01FWdmajsoIHEk7aJbywfT+ISOB4fstWrNaugIpE8ppCARia5KUydJlAY4lNSlIsA5IQuldKxhExycmz5FYwdeW1IUKbmvBeS6RlIB99o26qtcE4lNKJhqQpSEhQYRFy5cgYrO0FKKhdEhzWgGfhcPLoPmprA3TmBjWkt27xsOgHYTMefEIKpXpOBAzg67gEIrCsXuGNyyCBo0ANaMvoJVOSo1M1FlQ7mi2nxAk/6jq4rgUHaX2f4muaeM6+xRgKF2AfK4FI0rlgEtNskQQHCCOOx5K3xDFAGxoOYndUVvTIqmoR4QND+irMVvtY/uhGWhnFNkl/iztYKqauKv5n3QNZ73HwtJU9DBq1SCRlHGd/NLVlNIjrYo88T7/ZdaXxDpM7+qu2YbRpk7EwP7qZlhRJL8o0AKV10YfZ4lUZDmkidASPkRxWgdjzqlIgs1IIknw68Y3VVULDBkZQNAh3Xgd4NOgHBGLcV2K4p9olrUwQBmg/VR06QAdmJ6H9FX3tZtN7RvxOqHusUO/Db+BI67HUfhquz9K2ILnvYXA/mdAaOYE6lS49jFAsNKmJJECGw0a7zosZb1w4wW5vL5SrOpUcIAZ0G2iZZNVQnj3bHUzAlx1Ow3Vjglo2qXZ50iADBM8VUMuNSC2I2HPqSlDyTq2PVKnTTGlE1tTs3T4GoPY/KFQX9r3VRzJmI16ETr1QlvckOhtR8jg1xH0TmVwHAv1bIJG/HXVU8il6JrG0IU0rVsvLOoI/wYHNoBHpCqr2hQfVIpFobALgNp/y/JNKl7FVvVFOUVQw2s8S2m4jnsD5TujMNuqdOrJpy0SMx1M842VliXaNo0pCT/U7QegH7IKUathaldIypTU9zgdzqSfWVYW2CPfRNXM0aOIEakNmfLZaP66C9dlXK5MkLkaNZnDSqD8hTm13t/I5ac0U3uAm0bkymo405u7CiafaPm1wR5tgeATHWTeQ9lgWVrMaPeAtmCdlqbe4DlV0bFoI0HsrKhTAhYxc3tgW0Q7MNgSI58llK+FOdUaJ6not7iVRvc6Ea5QDIWXfWykhoLnStNJAxtshbaMpCTE8uCjpXOf4T0idFDcMc50O0k/JSZGtORgiCJP3lSZYfdsaxhMS4jfko3Vwym0cx9VDeuaYbmKW2wg1NA5xj5IJNukG0uyuq335SY6IMX4pku9lbYp2WeGEtPiA06lC4X2XqPpl1WB/SPum8TB5EUT7x73TOp+SMZbOc0y8a9EQ3su/UeEweJjRSHs3XMAZWwds2nqEKDyJcJYKLSZlxRVzd5YJMnfyCrbxz7cta+mXaaEajyVZfYi55+EidNRB8kriwqSNDh9UPlznQJ05pl9cNpgnNKqK1m9gBBmeGxU1Syc+BufPjyS0EntsYA8IAHM80RSuMxgOHqqcMbTb42HNI15hT0a9FwimXt5+qzRi6trst1ga8lFXxXKeA8tJQFdmUAMeXHWZTajQ8ZXaEeiyFCX4uTxTm3sqsZYwfiJCOFAASmpACWVwDqt7ReKdjp/yjr1cI+685cOu/wAuq1dXHWfh20crs5Y1vDLpGspsdKRPIm6KXKVymkfwLlTkIG92uyKQJQEBiLIu7tTALoWMRtYFM2nIIBEwnUaRc4NAknQBPOHvoOJqRJmCNtNT9krv/DLsgoUcoInWOZ08kC66giBJnX34oW7vnZyBspreu0BwA8Wk+ZQRbiTYjdAHYGPlKksi6oRoMqipYa6trqNdeq0mH4a2mE8INvYk5pKjPXHZ5+fNMj+QtLg9tlb1RL6jdpCho18shWpRdok5N9jcUjKSq41oaB0+aLu6ubRCXdP7qcnbsMQCm4lHOdy3UFvSgSd1FWr6wkSGsmtbbM7M7VU3aW1YSNBO6t23gDVX3AzvEI+jFdUrB2ppvJjXkqWtfkVAGsLSHbTuOq3VVrGsgATCyeJ2pnMNIQ4oPN2NLe8qCTlGspL2ypBp7uZ3OvDiqT8UZIOhnXqryhfBjSWiMzSDPIjgpyiytor6NB1V+WiWhx2zOyiQJiSrS4oOP+JTgMHdNDXmKubu2l7sv9JdMFD2WHCo6nAO+o5yI+416oX8VcPAqPZJaylT0HCmMonmdN0bXQrTsIOup0PJc+rOigpYgDIIg/RcdDI4oUZhWZSOqvzDNuNuGi0OE9nWOod9Vc9pgubwaANifOFShwqVZGoCLTTQtpoMzLk5ciIWVN06hShV2E1Jpt1B0COBTmJVyaEsrGLfs5Rl7nn8sAH/ADH+/wA0B2rvZqHgGjKNSf8AV9vZSYRijmhwaBE8RsY3VNidPOTzklZy/Ogxj+rZQ1gS5o3BcJ8pV/b2Lpdl0mOHtqhrGwzVBz+i034UhsBaEGx5zobaEU26uJhZPtD2qqZiyn12WiurOqQfIrJ06wpU3vDM1UPcdRq3L8Lh89FaC5dkm+OygucXvKZBL94K0vZPtaaru6q6OOx5rDYreGq8uO5/kQiMKw5+ZrwDmBaQOO6ZxQkZNntjrQkAhSVbQlum6IwokUW5xrGs/dBXeLtGgIQcUhkm3orLwZWmeCogHPd4QtK+7ZxjXmlo1G/lDR5BSaDbRQG1eBJ0CFfitNhiZPIaq4xG1qVjlDsrOMblG2GCUaI8LBPEnUpWNZn23j3fDRqO6xH1TavefmpPHotVUqRoh3VwtZjF3lGkNXUvFwEbeapTfRUGYEt5DSPJeh1Wtdu0FU+JYHSeDAynhCzdoKdDuzeMsbWaxtNzC/wBxeXTMEA6DTQKqusZZUe5lGkxrSTldLi46/FvAnfbiqa3t3U6zJLiW1KXsHjb0VxhVs2iHHwkukageEcI5LieCMZ8uy6kCXFswuB0njH3Xd2zMwuJawuYHkRIbIzRPSU+6yl4IjiNOKXD7c1JDtAN/suhNLbEaN72hxOkLfJTcwh4yjKQYYNpI0BOghZazo5W9So7exDesHT9YRapduyVUIlQ34noFyNmKtmH1Rq2feFO29uafMjqJ+i0TKeiNw3De9z6E5WOcI/q4A/NNYvRmrftG7Z9P2P2KsKOM0njct80+paNPxN9xxULsOpgyBBQdUFB9m5rqbg18gHUjnyQlxUMgD9dOqItWxTdl0JcNR90lSk5zwANJAJiJhT9KkUX0uuz9lDc5GpVyWJbdgawAcgmvqLrqlRBu2MNNDVrGk74mNPoFNnJUndmJgxzWoqofSl/4Vsy7N3FPNz1VnZ4PRZ8FNrfT9USzRTsqLULONdAGOVyyi4jkvNWXDnEunUGCvVLhmYQduSx+N4IACaYA1BKWasp/wA+SK0zKYviBY5rdSTy39FruzdpVNPM8ETBAO8dU3CMAaane1ACR8IPBal4jZIo6NmyK6QGynGphPdWAHBD16j9dAUjJMeEIUSWxlaSga1u5XgoTGh126+SV1i6cuUyn4Fkor2Z19NzTBngf5CbUYeascTs3agyPks+6GmHPHuUnGuxZICxeykh4GoIOhUFWgHgAyBod1Y3DqZH5j8lnjfkENawRMGSSg4x7BGTFuaZa5uogI7DA7M4icpJnlI2QVwXF4a1rc0tAHOTAWlvMNdbU2Zy0lzoIbMNJBPtA+RSSjrSC5b2RwkcdEpUF7Uy03u5NcfkmSEZkP8A7fr9Vyy/eO5lIqcELZ9H08Nfx7sepP2Vphj3MkTTiDECNRtPNM7yN4PTgEpqjjGuy6mo/Dn2AV7JzyXOyknfT2Qxw+CJYCJEweCtnvPVRzP90HGPwNsH7Q2LQxpYwNAcySNNDp+nuq3C6XiMxv5rSVa7O5Lag4OEHiIWUsmw+W7EE+vkoSVSstB/mjSPqABAuq5j0UFWTuVLb8o9U12zdFjauaAQ4TrIU4vNw4S0xpyQ7Boo3OATrRRcX2T1rou0gAcOij76EPVqwq26xIDQSVgOuolpWuVT4niDQ0ydVX3NS4ePCMo4c1Q3mGXT+ICV2PDCu2bKzuhARbq+ixlpSuaY8Rafqp3Yzl0OhKS2CWJ9otbp7yT4oHBS2TyNzKpxehyfSrAH90oq0a+3xEhsaaTB4id4TzfOyxI5TxhZpl8Rrw48wpTfAjQ68jon5FPz8DsRqOeBJBgR/dZDEbR8zlKKu8QeDuQoWYk/mD6Skk0+xW/hW53AQQVna9dwquI6e62j70H4qYPUGD7FVVajb1HENcWu5OEfNbimgKRV4XULrilmOveUv/IL1DtXTBpUjH5yf9pA+/sV5mzCalKpn3Ac10jUjKZH0XqvaINNsHgjV1MtjaC3gPL6lZLVCze0zJKt7R1MttV/0x7qyKou2L4tiObmhCKNJ6MBouTsq5VolZ9J0wSddFPlk9EOawHw6pc54yqCk9V7RuUJXuxs1JUoOd0CfSs28SsYiZLuHugKluab5A8JVnUIBQdzczw25pWkPFkjqI+IeySlWP7KO1rE6eykzQdfdJIZFjREBRXAG6WhWHNTvAKpF2IyouanNVVVnilaWvag8EFXw5O4hhOmU34khD18VAVy/DxyVZfYUIlSlaOuOaPsorzFZ2VNcXBcVa3OGmdEL+AgqY8s19AtG9c3dHNxOVC+zSi1QOdhtHEU67fxHHZDtowpck6eoQASUrmRleMw/wBw9U2rSgZmHMPmPMKE00ym4sMtP7pb+hoHr3JAJ5SqQBzjnO3MLS3hZVaWtLWv5SIKpAxzZBBkaELP+hopXsNt6rmADMS3+aLTU6LsomSIEb8eiruz/Z6tcNBgNYDOZ+maODRv6xC3mG27mMDanxCdOXIT5fVPjx+R0yeSairRk227js1x9CqLtfhdepTa1lKo7xSYaeAXqFas1onmhzck7NXSsCRB5bPCf+Hbz/p63/aVy91z1OQ91ybxC8gijZncn+eSIq1AxpJMAbk8An1KnALHdtcTOlFp31fB16Army5OOkdGLHydsgxftW4uijGUbuOpd1HABVzO0tyDPeSOUAD5Ivsn2e78mo//APMGANs5/wDVaPGMBtiyMjWkfCW6H91FLI9lW8a0D4RijajM7viG7eHQhB3t457tNAoqds2k0hs6kSTxQ9WrCurrZKleiwZc5Y5x/IVlQuA8Q7QrN2HiJe7YbdVM66mXN0Ddo59UnJIbjZePBYZBPkjba8010WaoYyC3xHWYR1F4OoJQUqejOP00dO4B5KWQqSnUhF96umM2yDjRLUILlW4meCIc4oO6etJ6CiucwQq6ozVH3D1X1XELnZZDTRCYaac2qSmklAxzqeijhOL0FVv2NMTKWzJBNVVt5cNaI3KEvcXds0QOPOEIawETrKDHSHUS6Z135rRdl6tO5rsZWgEGZOgeG7AlZg3B3Og4BTWFUBw04ymjo0j2eviAbUDGZSQIJgQOQH6JlWsdS4z+3JUWE3PgzaD7o6nUO7tuAXqYYVE8+btk41Mu9lxq8tkNXuBso3VANPdM2kBJsN70cykQPftXJeYeJfZtV532pqk3D5nTTeRovQLenElef9p2EXFSRGvoeq8fN/M9LD/A9BwOi2na0QNu7YT1JGY/UqtxC5zEk+gQ+FYqX29MblgDHebYAPqIXYjVbRpmo/Vx+BvVdLyKMUc6g5SZWXNxwMIGq0kKsuarnunxHMdAOnIJtK4c06z1B+hUfLbL+IubKm53hmAFOcOImCddPNFYLQzAOB0K1Flh3Ep1DkScuJk7TASNQMx+Q9Ve2+AOjxHL5arS0qYAgBPIVVjSEc2ylt8EY3cuPmUcy0aNgERCRz03QpA+iOQQtS1Yd2hEVHKNrJSuYaKe9wgHVo1VVWwepr4Qtg5sIeq9Ckbk0ebXtyaZALDxnp1VbUxpwjw6q/7d0CWhzfWOSwjqmsGVNrZaPRY3eKueNNOEbH1QdxXygTCCuK3QplJ+mk+R1Q4hsmJJMkT6wIT8x4hDZyTuQp7ak48HFAJGxkkkz0RtsCTAUgtgNSfTdE0X8Gt9VrBReYdeOZAnTTRaCteA7LKWtBxgyrhjdBJXRjzNKiM8aYeyrqlNU6+yhfeZg0GPC3KIEaSTqmGqUzm2KohGvVcoO8SpeTDRvMgAWW7X4dnp940CWTOhkjpG8LQ3NfggG3JDubT6qWbHe0Uw5K0zz7CsRdRfmEOH5mnZylxzFTcPzQWtGgBMx7LUYv2cp1vHTIYdZEaGNfQrDOYQSDuNPmuR30zrVdouMGxNlBjnBmasZAJ0axo5czxVfQovrVABLnOJJPMnUny3RFrhL3mNPNbbs9gjaInd3E/sqY8bb2TnkSRY4PhwpsA5AK4aFA3RTtK746OJ7HpQmyke5Axz3IdzkheqrtDdOp0SWOhxIAP1hTlLVjqIa86qem2AsTQxO7pD46w2JJbPPaQpcJxGr347yo8h2jmu2k7RyUFNX0O4mrrVggLiuibpsc0C+mDuquyZTYuA9paeKxF/hZJ94W5v7UnY6Kpfa6kFTKoxNTD3N3afOFZ4H2dq3L8tKnmI3cdGtH+Z3Dy3WgNmz+cV6X2XsG0rdgaBLhmceJJRirYJypHnNX/41umtzD8O4j8oc4H3cIWeGH1GkteCCDBB3B5L34rKdrMDc9wq02ZjEPjcxsY4oyh8Ejk+nmbMO1+yJt7EblWVUwYjXiOIPVMJ45o6BS6LCU6IGyc53RKwE7ZvVPFAnUkn2CKYANx1UtB/Apa1EbqJismTaDe66rkP3hXIgNXXupQj6pTn1QEOa07p2xUg7DbrxZSd9ll+1WHZKpcAMrtfU7hG1a5DpHDZWk07unldDXD5HhHRcmWO7R14paoqeyd61zhTcQHD4TzHLzW6Y2F5ZiOGVKM5hDZ0PA+RReH9priiMuYPaIhrxm9jII/miOPKlpizxPtHpLiJRFJ0rD0u3DCP8Si8H/K4Ef7oK0eC47Rr6MLpESHNLT+hXTGabpEJQaLklRvC6o9QVKqaQqCLS2znoN0dcWFJ4DXsa4AyAeB5oPD7xrQQ7TWQUf39M65m+6MaolK7JcvCBCFr4bSeWucxpLTLTEQeeiVuI05jNHnITLrF6LBJcD0b4j8kXx9ipSCKtAOEOAKx+OW3cviZBEtPrqFYO7YU5gU39JLQs7i+Lms/M6BAgAbAbqU5RaLQjJMhfcakIGtcBpkpS/ihquoOkqDLol/G0ztMnh1K9GwpxZRptcfEGif0XnuH2zc7XRpLeQ0kHbmvQHhCLaNKKZ2BY7RuhUNEuIpvNN0tI8Q5cwrNVN5efh6LntpF7vEQB4W5tNHvAOSf6jppqQnY5jQtqbKhp1ahc6m0Npw4gv4k7QJ3XSlqzmfdBNfC6L3FzqbC47mNSsf2m7PsoxUpyGEwWzMHhHmt210x6b/fqqvtBBp5OZHnA4pJRTGhJpnnnexoAfQFM/EzoQtRRwsEwAZKhvcNyEtIEj2jmpODRfmmZ6QUM5gBV9Swp1Qw0AnzAHzRGMYCylQDsxNQEZoMt15eWmvVNGwNrozkfyVyfk8vkuT2KWzkLVduUpfooKu0ImoaDpKipmHAiR5IptPTVROb4tEAo11FgfTAeA4ECZ1VPfdk6LjLC5hPqPZW9ofAPJMdX1UXCLKKbMxV7F1Py1GEcSZBWh7M4GKAl5DnnUxsCrBj5UgfBC6MeKKdk55ZPQRWch6r4UzzxQdy5UkTQ1tWU0XEId1RRk8VFsdElxcIOo+VKYKie1TbsYAqEblA3DQSjrshAP1SjkLZHHRHWoCFcFLT0KNmDjAPhC1WB4s0gU6mhGjXcD0PVZKgUTKKdCSVnodTYxy+R3Vc5xncqhw/FqrBEyOR19juiq2KOdtlb5bot30LFceyzucRy6NgnieRVfUq5iS4yUAKiTv1RSSQrRb0cRhoaSQBxG5CrL6pncTJjhO8DRDG4Qrq+qSTDFBtCuWGWmDzS3l857cpgN3Mbk9UEKybUqIBog7voFy7MFywaITwUdTcJVyoYfxUNT4ly5ACNRZ/APJQV90q5S9joItUQ7dcuXVHoi+wgbIKvukXIz6NEHqbKBnFcuXOyiOSVFy5KEqbpCBcuSjiFSNXLljBNJEU1y5FihLFK1cuWQrFCiK5cizeiOpwQVfdcuQYUSM2UddcuRMRLly5YJ//2Q==" className="w-48 h-auto rounded-lg mb-2"></img>
              <CardTitle className="text-center text-black py-5">
                Hello! I am Sheryl :>
              </CardTitle>
              <br></br>
              <CardDescription className="text-center">
                I'm struggling haha im ded but i like cats yay :3
              </CardDescription>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center justify-center min-h-screen">
              <CardDescription className=" text-center">
                take a look at this cute cat below
              </CardDescription>
              <br></br>
              <img src="https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750" className="w-48 h-auto rounded-lg mb-2"></img>
            </CarouselItem>
            <CarouselItem>
            <div className="flex items-center justify-center min-h-screen">
              <CardContent>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD69qAgguZqA-vNe-g-zEcY4KfCfBnXH6udw&s"className="w-48 h-auto rounded-lg mb-2"></img>
                <div className="flex flex-row gap-1 justify-center text-black"><p className="font-bold">Name:</p>Sheryl</div>
                <div className="flex flex-row gap-1 justify-center text-black"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-1 justify-center text-black"><p className="font-bold">Hobbies:</p>I like to dance</div>
              </CardContent>
            </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center justify-center h-dvh">
              <CardTitle className="animate-bounce text-center text-black mb-4">
                The End!!
              </CardTitle>
              <img src="https://media.tenor.com/C0UG450EpqkAAAAi/saltando-meme.gif" alt="yippee catto"></img>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>
    </div>
  );
}