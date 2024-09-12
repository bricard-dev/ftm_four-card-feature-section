import Card from './components/Card';

function App() {
  return (
    <>
      <main className="mt-[5.3125rem] px-8 space-y-[76px]">
        <div className="space-y-4">
          <h1 className="text-center text-2xl font-light leading-normal tracking-[.17px]">
            Reliable, efficient delivery{' '}
            <span className="block font-semibold">Powered by Technology</span>
          </h1>
          <p className="max-w-[540px] mx-auto text-center text-grayishBlue leading-[1.6] tracking-[.1px]">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="grid gap-[25px]">
          <Card
            title="Supervisor"
            description="Monitors activity to identify project roadblocks"
            imgSrc="./assets/icon-supervisor.svg"
            topColor="cyan"
          />
          <Card
            title="Team Builder"
            description="Scans our talent network to create the optimal team for
        your project"
            imgSrc="./assets/icon-team-builder.svg"
            topColor="red"
          />
          <Card
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            imgSrc="./assets/icon-karma.svg"
            topColor="orange"
          />
          <Card
            title="Calculator"
            description="Uses data from past projects to provide better delivery
        estimates"
            imgSrc="./assets/icon-calculator.svg"
            topColor="blue"
          />
        </div>
      </main>
      <footer className="pt-12 pb-4">
        <p className="text-center text-[0.6875rem]">
          Challenge by{' '}
          <a
            className="text-[#3e52a3]"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a className="text-[#3e52a3]" href="https://github.com/bricard-dev">
            Bastien Ricard
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
