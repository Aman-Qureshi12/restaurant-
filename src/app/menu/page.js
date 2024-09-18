import Menu from "../../../components/Menu/Menu";
import { getWHoleMenu } from "../../../lib/data-service";

// Disable caching for this page
export const revalidate = 1800; // Equivalent to cache: 'no-store'

const page = async () => {
  let wholeMenu = await getWHoleMenu();
  return (
    <main>
      <Menu wholeMenu={wholeMenu} />
    </main>
  );
};

export default page;
