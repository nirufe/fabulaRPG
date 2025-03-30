// Initialize system
Hooks.once("init", async function() {
  console.log("Fabula System | Initializing Fabula System");

  // Define custom system settings later
  // Preload Handlebars templates later
  // Register custom sheet classes later
});

// Setup system
Hooks.once("setup", async function() {
   console.log("Fabula System | Setup Complete");
   // Setup logic like registering helper functions
});

// Example Hook (Can be expanded later)
Hooks.on("ready", () => {
  console.log("Fabula System | Ready");
});

// Add specific Actor and Item sheet registration here later if needed
// e.g., Actors.registerSheet("fabula-system", FabulaActorSheet, { makeDefault: true });
// e.g., Items.registerSheet("fabula-system", FabulaItemSheet, { makeDefault: true });