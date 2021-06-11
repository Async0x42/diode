import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules';
import store from './index';

@Module({ generateMutationSetters: true })
class ConfigModule extends VuexModule {}

export const configModule = new ConfigModule({ store, name: 'config' });
