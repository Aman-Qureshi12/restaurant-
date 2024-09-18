Overview:  This project leverages Next.js for its server-side rendering capabilities and Supabase as a robust database solution to create a application capable of filtering,  and managing data efficiently. It incorporates features like sliders, form validation, local storage, and automatic data refreshing to enhance user experience and data integrity.

Key Features: 

**Data Filtering**

- Users can apply various filters to refine data based on specific criteria.

**Form Validation with Zod:**

- Zod is used to validate user input, ensuring data integrity and preventing errors.
- Validation rules are defined to enforce data types, required fields, and other constraints.

**Data Fetching and Refresh:**

- The application fetches data from the Supabase database using appropriate API calls.
- Data is automatically refreshed every 30 minutes to keep the interface up-to-date with the latest information.

**Responsive Design:**

- The application is designed to adapt seamlessly to different screen sizes, providing a consistent user experience on both small and large devices.
- Responsive layouts and media queries ensure optimal rendering and navigation across various platforms.

**Technology Stack:**

- **Next.js:** A popular React framework for building server-side rendered web applications.
- **Supabase:** A Firebase-like platform providing a PostgreSQL database, real-time APIs, and authentication services.
- **Zod:** A TypeScript-first validation library for defining, validating, and transforming data.
