// triggers/new_lead.js
export const newLeadTrigger = {
  key: "new_lead",
  noun: "Lead",
  display: {
    label: "New Lead",
    description: "Triggers when a new form submission is received.",
  },
  operation: {
    type: "hook",
    perform: async (z, bundle) => {
      return [bundle.cleanedRequest];
    },
    sample: {
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hello from Zapier CLI (ESM)!"
    },
    cleanInputData: false
  },
};
