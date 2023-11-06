import { AdoptableDogs } from './AdoptableDogs';
import { ContactForm } from './ContactForm';

// creates content file
export function Content() {
  let dogs = [
    {
      id: 1,
      name: "Bogey",
      image_url: "https://media.istockphoto.com/id/1427592301/photo/corgi-puppy-dog-sitting-on-the-table-in-summer-sunny-day-close-up.webp?b=1&s=170667a&w=0&k=20&c=VCgkX-25z4hMZv4ZH1lxbmUvea3YhLE5wRVkb3Q9_6I=",
      age: "2 yr",
      breed: "corgi",
    },
    {
      id: 2,
      name: "Dido",
      image_url: "https://media.istockphoto.com/id/1415809177/photo/boxer-puppy-relaxing-on-the-sofa.webp?b=1&s=170667a&w=0&k=20&c=gNth1Bxjwy1U0Szj5yYNuTMgFNju_TasS7o7mRoMR5A=",
      age: "5 yr",
      breed: "boxer",
    },
    {
      id: 3,
      name: "Stella",
      image_url: "https://media.istockphoto.com/id/1448525820/photo/puppy-of-bernese-mountain-dog-sitting-on-the-grass-in-the-garden-puppy-with-flowers.webp?b=1&s=170667a&w=0&k=20&c=4GHF0EAHkWaBmOlMiFLP9qcOCZIcvT4m3DtVMg95vYw=",
      age: "6 mo",
      breed: "mini bernadoodle",
    },
  ];
  return (
    <div>
      <ContactForm />
      <AdoptableDogs dogs={dogs} />
    </div>
  );
}
