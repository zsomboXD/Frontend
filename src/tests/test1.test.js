import { describe, it, expect } from "vitest";

describe('something truthy and falsy', ()=>{
    it('should return true when something is truthy', ()=>{
        expect(true).toBe(true)
    });

    it('false to be false', ()=>{
        expect(false).toBe(false)
    });
});