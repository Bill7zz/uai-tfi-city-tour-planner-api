import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Provider } from './entities/provider.entity';

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(Provider)
    private readonly providerRepository: Repository<Provider>,
  ) {}

  create(createProviderDto: CreateProviderDto) {
    const provider: Provider = new Provider();
    provider.name = createProviderDto.name;
    provider.cuitCuil = createProviderDto.cuitCuil;
    provider.email = createProviderDto.email;
    provider.direction = createProviderDto.direction;
    provider.zipCode = createProviderDto.zipCode;

    return this.providerRepository.save(provider);
  }

  findAll() {
    return this.providerRepository.find();
  }

  findOne(id: string) {
    return this.providerRepository.findOneBy({ id });
  }

  update(id: string, updateProvider: UpdateProviderDto) {
    const provider: Provider = new Provider();
    provider.name = updateProvider.name;
    provider.cuitCuil = updateProvider.cuitCuil;
    provider.email = updateProvider.email;
    provider.direction = updateProvider.direction;
    provider.zipCode = updateProvider.zipCode;
    provider.id = id;

    return this.providerRepository.save(provider);
  }

  remove(id: string) {
    return this.providerRepository.delete(id);
  }
}
