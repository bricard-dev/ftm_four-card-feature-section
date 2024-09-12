import Card from './components/Card';

function App() {
  return (
    <>
      <main className="max-w-[1100px] w-full mt-[5.3125rem] xl:mt-20 mx-auto px-8 xl:p-0 space-y-[76px] xl:space-y-[64px]">
        <div className="space-y-4">
          <h1 className="text-center text-2xl xl:text-4xl font-light leading-normal xl:leading-[54px] tracking-[.17px]">
            Reliable, efficient delivery{' '}
            <span className="block font-semibold">Powered by Technology</span>
          </h1>
          <p className="max-w-[540px] mx-auto text-center text-grayishBlue leading-[1.6] tracking-[.1px]">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-[25px] xl:gap-[30px]">
          <Card
            title="Supervisor"
            description="Monitors activity to identify project roadblocks"
            imgSrc="./assets/icon-supervisor.svg"
            topColor="cyan"
            className="xl:row-span-2 xl:self-center"
          />
          <Card
            title="Team Builder"
            description="Scans our talent network to create the optimal team for
        your project"
            imgSrc="./assets/icon-team-builder.svg"
            topColor="red"
            className="xl:row-span-1"
          />
          <Card
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            imgSrc="./assets/icon-karma.svg"
            topColor="orange"
            className="xl:col-start-2 xl:row-start-2"
          />
          <Card
            title="Calculator"
            description="Uses data from past projects to provide better delivery
        estimates"
            imgSrc="./assets/icon-calculator.svg"
            topColor="blue"
            className="xl:row-span-2 xl:self-center"
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
