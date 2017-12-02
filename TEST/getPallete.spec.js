const {getPallete, getRgb, getLottery} = require("./../lib/getPallete");
const assert = require('assert');
const fs = require('fs');
const configFile = `${process.cwd()}/config.json`;
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
const fixtureConfig = `${process.cwd()}/TEST/fixtures/config.json`;
const should = chai.should();

chai.use(chaiAsPromised);

describe('color pallet', function(){
  describe('.getPallete', function(){

    it('should throw an error', function(){
      expect( () => {
        getPallete(fixtureConfig);
      }).to.throw(/not an array/);
    });

    it('should return an array by default', function () {
      let pallete = getPallete();
      pallete.should.be.an("array").with.length(3);
    });
  });

  describe('.getRgb', function(){
    it('should throw an error if not hex', function(done){
      getRgb('not hex', (err, data)=> {
        err.should.exist;
        done();
      });
    })

    it('should return rgb array', function(done){
      getRgb('#44533f', function(err,hexVal){
        // assert.strictEqual(err,null);
        hexVal.should.be.deep.equal([255,255,255]);
        done();
      });
    })
  });

  describe(".getLottery", function(){
    it('should return won', function(done){
      getLottery(3).should.eventually.equal("won").notify(done);
    });
  });
})
