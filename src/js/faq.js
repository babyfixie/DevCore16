import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

// Initialize Accordion
document.addEventListener("DOMContentLoaded", () => {
  new Accordion(".faq-list", {
    duration: 300, // Animation duration
    showMultiple: false, // Only one item opens at a time
    collapse: true, // Items start closed
    elementClass: "faq-item", // The list item class
    triggerClass: "faq-item-tittle", // The clickable title
    panelClass: "faq-item-text", // The text content
    activeClass: "is-active", // Active class for opened item
  });
});
