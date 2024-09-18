import Chefs from "../../../components/About/chef/Chef";
import History from "../../../components/About/History/History";
import Mission from "../../../components/About/Mission/Mission";

const page = () => {
  return (
    <main className="app__pages-large-screen">
      <Mission />
      <History />
      <Chefs />
    </main>
  );
};

export default page;
