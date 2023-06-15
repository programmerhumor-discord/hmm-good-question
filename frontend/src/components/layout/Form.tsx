interface FormProps extends React.PropsWithChildren {
	title: string;
	buttons: React.ReactNode;
}

export function Form(props: FormProps) {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="card h-full w-full bg-neutral text-neutral-content shadow-xl sm:h-auto sm:w-96">
				<div className="card-body gap-4">
					<h2 className="card-title">{props.title}</h2>
					{props.children}
					<div className="card-actions justify-end">{props.buttons}</div>
				</div>
			</div>
		</div>
	);
}
