import { fixture } from "testcafe";
import chai, { expect } from "chai";
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

fixture `Testing API`

test('Create a GET request to the main MET collection', async t => {
    const endpoint = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'; 
    const response = await chai.request(endpoint).get('');  

    expect(response.status).to.equal(200);

    const { total, objectIDs } = response.body;
    
    expect(total).to.be.a('number');
    expect(objectIDs).to.be.a('array');
    expect(objectIDs).to.have.lengthOf(total);
    expect(objectIDs[0]).to.be.a('number');
});
