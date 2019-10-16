const fs = require('fs-extra');
const sandbox = require('./sandbox');

describe('distribute default-types', () => {

    beforeAll(() => sandbox.init()
        .then(() =>
            sandbox.scaffold({
                type: 'stream-api',
                domain: 'acme.org',
                author: 'coyote',
                namespace: 'garden.pet',
                shortName: 'garden-pet',
                projectName: 'garden-pet-stream-api',
                title: 'Garden Pet Stream API',
                plugins: ['maven', 'dotnet'],
                javaPackage: 'org.acme.garden.pet.v1',
                mavenGroupId: 'org.acme.garden',
                dotnetNamespace: 'Org.Acme.Garden.Pet',
                dotnetPackageId: 'Org.Acme.Garden.Pet.StreamApi',
                mqs: 'Kafka'
            })));
    afterAll(sandbox.clean);

    it('should copy default-types in dist', () => sandbox.generate()
        .then(({dir}) => fs.exists(`${dir}/dist/model/ts/node_modules/apikana/default-types.ts`, res => res || fail())))
})




