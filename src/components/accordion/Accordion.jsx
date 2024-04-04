import { useState } from 'react';

function Accordion({ data }) {
	const [openAccordion, setOpenAccordion] = useState(false);

	return (
		<div className='accordion'>
			<div
				onClick={() => setOpenAccordion((prevState) => !prevState)}
				className='accordion__label'>
				<div>{data.label}</div>
				<span>{openAccordion ? '-' : '+'}</span>
			</div>
			<p
				className={`accordion__body ${openAccordion && 'open-accordion-body'}`}>
				{data.body}
			</p>
		</div>
	);
}

export default Accordion;
