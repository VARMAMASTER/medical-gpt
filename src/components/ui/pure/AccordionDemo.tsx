import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

const AccordionDemo = () => {
  const items = [
    {
      header: 'Is it accessible?',
      content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      header: 'Is it styled?',
      content: 'Yes. It comes with default styles that match your theme.',
    },
    {
      header: 'Is it animated?',
      content: "Yes. It is animated by default, but you can disable it if you prefer.",
    },
  ];

  return (
    <Accordion.Root
      className="w-full max-w-md rounded-lg"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={`item-${index + 1}`}
          value={`item-${index + 1}`}
          className="border-b border-border last:border-0"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-4 text-left hover:bg-card/50">
              <span className="text-text font-medium">{item.header}</span>
              <svg
                className="h-4 w-4 text-muted transition-transform duration-300 group-data-[state=open]:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden bg-card/30 text-muted data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="px-4 py-3">{item.content}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionDemo;
