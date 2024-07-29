import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WebContainer from './component/WebContainer/Index';
import Title from './component/Title/Index';
import axios from 'axios';
import { BasePath } from './component/BasePath/Index';
import { Parallax } from 'react-parallax';
import Error from './Error';
import BreadCrumb from './component/BreadCrumb/Index';
import Container from './component/Container/Index';

const Content = () => {
    const { slug } = useParams();
    const [pageData, setPageData] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BasePath}/policy_page.php?category=${slug}`);
                if (response.data.error) {
                    setError(response.data.error);
                } else {
                    setPageData(response.data.policy_page);
                    if (response.data.bannerImage?.length > 0) {
                        setBannerImage(response.data.bannerImage[0]);
                    }
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (isLoading) {
        return <div className="preloader"></div>;
    }

    if (error) {
        return <Error message={error} />;
    }

    if (!pageData) {
        return <div className="mx-auto p-100 w-100 d-flex justify-content-center">No data found</div>;
    }

    const { heading, subheading, content } = pageData;
    const isContentEmpty = !content?.trim();

    const getStrengthValue = () => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
        const isMac = /MacIntel/.test(navigator.platform);
        return isIOS || isMac ? 100 : 300;
    };

    const careerCustomClass = slug === 'career' ? 'bgcolor' : 'bggrey';
    const textAlignClass = slug === 'career' ? 'text-center' : '';

    return (
        <>
            {bannerImage && (
                <Parallax bgImage={bannerImage.imagePath} strength={getStrengthValue()} className="flex-center col-12 float-start parallaxBanner">
                    <div className='container position-relative'>
                        <div className="creativeslide">
                            <h1 className="heading bigFont text-start blackText" dangerouslySetInnerHTML={{ __html: bannerImage.title }} />
                        </div>
                    </div>
                </Parallax>
            )}
            <Container _parentClass={`m-0 ${careerCustomClass}`}>
                <BreadCrumb pageName={slug} />
            </Container>
            <WebContainer _parentClass={`m-0 p-100 ${careerCustomClass}`}>
                {/* <Title firstHeading={subheading} secondHeading={heading} grandClass="customMargin" /> */}
                <div className="title flex-center col-12 float-start flex-wrap text-center position-relative showTextcont customMargin">
        <h2 className="col-12 float-start subTitle">{subheading}</h2>
        <h3 className="heading bigFont text-black col-12 float-start">{heading}</h3>
    </div>
                <div className="col-12 float-start pb-5">
                    <div className="pageContent">
                        {isContentEmpty ? (
                            <div className="text-center">
                                <h1 className="fs-1 opacity-50">Content Not Available!</h1>
                                <h2>This page is Under Maintenance!</h2>
                            </div>
                        ) : (
                            <div dangerouslySetInnerHTML={{ __html: content }} className={`col-12 float-start ${textAlignClass}`} />
                        )}
                    </div>
                </div>
            </WebContainer>
        </>
    );
};

export default Content;
