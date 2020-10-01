interface HotModule {
    accept: () => void,
    addStatusHandler: (callback: (status: string) => void) => void,
}

interface IModule {
    [key: string]: any,
    hot?: HotModule,
}

export default (mod: IModule) => {
    if (!mod.hot) {
        return;
    }
    mod.hot.accept();
    mod.hot.addStatusHandler((status) => {
        // eslint-disable-next-line no-console
        if (status === 'prepare') console.clear();
    });
};
