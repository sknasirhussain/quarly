import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Image, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/65c4e3ab0072400020e9c82c/images/Untitled%20design.png?v=2024-02-09T22:04:29.814Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box min-width="100px" min-height="100px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/65c4e3ab0072400020e9c82c/images/Untitled%20design.png?v=2024-02-09T22:04:29.814Z) 0% 0% /contain repeat scroll padding-box">
			<Box min-width="100px" min-height="100px" />
			<Text
				margin="0px 0px 0px 0px"
				width="100% border-box"
				overflow-x="visible"
				font="100 100px/100% --fontFamily-googleCinzelDecorative"
				display="block"
				letter-spacing="inherit"
				position="static"
				text-align="center"
				overflow-y="visible"
				height="100% border-box"
				quarkly-title="Choose your Rune"
				color="#ffffff"
			>
				Choose Your Rune
			</Text>
			<Box min-width="100px" min-height="100px" />
			<Box min-width="100px" min-height="100px" background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box" position="static">
				<Box
					sm-grid-template-columns="repeat(1, 1fr)"
					grid-auto-flow="row"
					grid-template-columns="repeat(4, 1fr)"
					grid-gap="15px 15px"
					grid-template-rows="repeat(4, 1fr)"
					lg-grid-template-rows="repeat(4, 1fr)"
					lg-align-self="center"
					lg-grid-gap="36px"
					width="100%"
					display="grid"
					padding="10px 10px 10px 10px"
					lg-grid-template-columns="repeat(4, 1fr)"
				>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						overflow-x="hidden"
						transform="translateY(0px)"
						display="flex"
						align-items="center"
						justify-content="center"
						overflow-y="hidden"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						padding="0px 0px 0px 0px"
						height="300px"
						width="100% border-box"
					>
						<Image
							object-fit="cover"
							position="relative"
							width="80%"
							left={0}
							right={0}
							bottom="0px"
							min-height="80%"
							src="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
							display="block"
							top="auto"
							min-width="20px"
							height="80% border-box"
							srcSet="https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1560711094-38271a62d40b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</Box>
			</Box>
		</Box>
		<LinkBox href="https://www.google.com/" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1707216171962-9f1514c0bda6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /contain repeat scroll padding-box" hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1707336669830-ece4474e77a8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /contain repeat scroll padding-box" target="_self" />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"65c4e3ab0072400020e9c82a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});