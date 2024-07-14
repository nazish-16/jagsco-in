import React from "react";

const Store = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center pt-10">
                <div className="max-w-5xl w-full px-4 text-center text-gray-700">
                    <h1 className="text-3xl">Store View</h1>
                    <p className="py-4">
                        Experience our store through our immersive 360-degree view. Navigate
                        seamlessly through our spaces, browse our offerings, and get
                        inspired from wherever you are.
                    </p>
                </div>
                <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 px-4">
                    <div className="overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1720905982765!6m8!1m7!1sCAoSLEFGMVFpcE00OE85T1hjNkhWaEJ0U3QtR2VncUVFamV2eDdIU3VtNEU0UE5k!2m2!1d17.407022!2d78.40310579999999!3f100!4f0!5f0.7820865974627469"
                            width="400"
                            height="360"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1720906050774!6m8!1m7!1sCAoSLEFGMVFpcE83UmZYTnUzRjRvTFU2T1NDNkFQM3YzNHJhazNnaDhHTXZFQXd4!2m2!1d17.407022!2d78.40310579999999!3f320!4f20!5f0.7820865974627469"
                            width="400"
                            height="360"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1720906105631!6m8!1m7!1sCAoSLEFGMVFpcFA4dkpPWlNMaVJGR3dKcTZ3V0tDc0dYeEVJYWFxOVY3WUFOcmhY!2m2!1d17.407022!2d78.40310579999999!3f340!4f0!5f0.7820865974627469"
                            width="400"
                            height="360"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1720906142194!6m8!1m7!1sCAoSLEFGMVFpcE84YnBUMERzVE9NeUhrOGdudERubkRRaUU1eTUwZE9BNlBSeWF1!2m2!1d17.407022!2d78.40310579999999!3f0!4f20!5f0.7820865974627469"
                            width="400"
                            height="360"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1720906362864!6m8!1m7!1sCAoSLEFGMVFpcE9qalNaU3lXWnAySDJEWVY3T2ZmQ01ORENzbU9hNnBBQ0t6dGU5!2m2!1d17.407022!2d78.40310579999999!3f353.305265872758!4f-27.62603619190798!5f0.7820865974627469"
                            width="400"
                            height="360"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1720906482978!6m8!1m7!1sCAoSLEFGMVFpcE5GZEIwRVNkWmhrQXJhcjczUkJIMzk1ekhLMzRJSTIxT2Z2VDIz!2m2!1d17.407022!2d78.40310579999999!3f0!4f0!5f0.7820865974627469"
                            width="400"
                            height="360"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Store;
