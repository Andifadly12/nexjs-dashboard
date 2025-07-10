import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });
export default sql;

export const getCustomers = async () => {
  return sql`
    SELECT id, name, email, image_url
    FROM customer
  `;
};
