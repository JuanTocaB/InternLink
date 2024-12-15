import Token from "../models/token.model";

const TokenRepository = {
  async index() {
    try {
      return await Token.find();
    } catch (error: any) {
      throw error;
    }
  },

  async show(id: string) {
    try {
      const token = await Token.findById(id);

      if (!token) {
        throw new Error("Token not found");
      }

      return token;
    } catch (error: any) {
      throw error;
    }
  },

  async showByToken(token: string) {
    try {
      const tokenFound = await Token.findOne({
        token,
      });

      if (!tokenFound) {
        return null;
      }

      return tokenFound;
    } catch (error: any) {
      throw error;
    }
  },

  async store(data: string) {
    try {
      const newToken = new Token({
        token: data,
      });

      return await newToken.save();
    } catch (error: any) {
      throw error;
    }
  },

  async update(id: string, data: JSON) {
    try {
      const token = await Token.findByIdAndUpdate(id, data, {
        new: true,
      });

      if (!token) {
        throw new Error("Token not found");
      }

      return token;
    } catch (error: any) {
      throw error;
    }
  },

  async remove(id: string) {
    try {
      const token = await Token.findByIdAndDelete(id);

      if (!token) {
        throw new Error("Token not found");
      }

      return token;
    } catch (error: any) {
      throw error;
    }
  },
};

export default TokenRepository;
