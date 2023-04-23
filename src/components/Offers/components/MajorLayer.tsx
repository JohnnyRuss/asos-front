import { Container } from "components/Layouts";

export default function MajorLayer() {
  return (
    <div className="bg-app-green">
      <Container>
        <div className="text-center flex flex-col gap-2 py-5">
          <div className="text-app-2xl font-bold uppercase flex flex-col leading-none">
            up to 50% off <br /> major layers! <br /> coats,knits,boots & more
          </div>
          <p className="text-app-xsm">
            Limited time only. Selected styles marked down as shown.
          </p>
        </div>
      </Container>
    </div>
  );
}
