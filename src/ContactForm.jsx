// moves contact form into its own file
export function ContactForm() {
  return (
    <div id="contact">
      <h1>Interested in a pup? <br />Contact Us</h1>
      <div>
        Your Name <input type="text" />
      </div>
      <div>
        Name of Dog <input type="text" />
      </div>
      <div>
        Phone Number <input type="text" />
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}
