import SubscribeForm from "./subscribe-form";

const Subscribe = () => {
	return (
		<div className="flex flex-col md:flex-row lg:flex-col gap-4 lg:gap-10 items-center">
			<h2 className="text-white text-center md:text-left text-lg font-semibold w-4/5 md:w-full">
				Subscribe and be the first to receive notifications about our upcoming
				releases and the latest news.
			</h2>
			<SubscribeForm />
		</div>
	);
};

export default Subscribe;
