import "@/ui/styles/index.scss";
import "@/ui/tokens/index.scss";

import { Flex } from '@/ui/components';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { Source_Code_Pro } from 'next/font/google';

const primary = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
});

type FontConfig = {
    variable: string;
};

// Replace with actual font imports if available
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-neutral="gray" data-brand="sand" data-accent="sand"
			data-solid="color" data-solid-style="flat"
			data-theme="dark"
			data-border="playful"
			data-surface="filled"
			data-transition="all"
			className={classNames(
				primary.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : '',
				code.variable,
				'root')}>
			<Flex
				as="body"
				fillWidth fillHeight margin="0" padding="0">
				<Flex
					flex={1} direction="column">
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}
