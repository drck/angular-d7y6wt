import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { PokemonTrainer } from '../pokemonTrainer';
import { Badge } from '../badge';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  name = 'Angular';
  // DataSource and Column names of tables
  dcTrainers: string[] = ['name', 'age', 'numberPokemons', 'numberBadges', 'edit'];
  dsTrainers: MatTableDataSource<PokemonTrainer>;
  dcPokemons: string[] = ['kdex', 'name', 'type'];
  dsPokemons: MatTableDataSource<Pokemon>;
  dcBadges: string[] = ['name', 'giver', 'description'];
  dsBadges: MatTableDataSource<Badge>;

  // Variables
  selectedTrainer: PokemonTrainer;
  pokemonToAdd: Pokemon;
  badgeToAdd: Badge;
  trainers: PokemonTrainer[] = [
    { name: 'Josue Bernedo', age: 18, badges: [], pokemons: [] },
    { name: 'Andy Vicente', age: 14, badges: [], pokemons: [] },
    { name: 'Martin Naveda', age: 14, badges: [], pokemons: [] },
  ];
  // Flags that control the expansion panel
  f_firstPanel = false;
  f_secondPanel = false;

  pokemons: Pokemon[] = [
    { kdex: 1, name: 'Bulbasaur', type: 'Grass' },
    { kdex: 4, name: 'Charmander', type: 'Fire' },
    { kdex: 33, name: 'Nidorino', type: 'Poison' },
    { kdex: 37, name: 'Vulpix', type: 'Fire' },
    { kdex: 79, name: 'Slowpoke', type: 'Water' },
  ];
  badges: Badge[] = [
    { name: 'Boulder Badge', giverName: 'Brock', description: 'It is a simple gray octagon' },
    { name: 'Cascade Badge', giverName: 'Misty', description: 'It is in the shape of a light blue raindrop' },
    { name: 'Thunder Badge', giverName: 'Lt. Surge', description: 'It is in the shape of an eight-pointed gold star with an orange octagon in the center' },
    { name: 'Rainbow Badge', giverName: 'Koga', description: 'It is shaped like a flower, showing grass, with rainbow colored petals' },
  ];

  constructor() {
    this.dsTrainers = new MatTableDataSource<PokemonTrainer>();
    this.dsPokemons = new MatTableDataSource<Pokemon>();
    this.dsBadges = new MatTableDataSource<Badge>();
  }
  ngOnInit() {
    this.f_firstPanel = true;
    this.updateTableTrainers();
  }
  // Button Interaction
  editTrainer(trainer: PokemonTrainer) {
    // this.selectedTrainer = trainer;
    this.selectedTrainer = JSON.parse(JSON.stringify(trainer));
    this.f_firstPanel = false;
    this.f_secondPanel = true;
    this.dsPokemons.data = this.selectedTrainer.pokemons;
    this.dsBadges.data = this.selectedTrainer.badges;
  }
  addPokemon() {
    this.selectedTrainer.pokemons.push(this.pokemonToAdd)
    this.dsPokemons.data = this.selectedTrainer.pokemons;
  }
  addBadge() {
    this.selectedTrainer.badges.push(this.badgeToAdd)
    this.dsBadges.data = this.selectedTrainer.badges;
  }
  cancelEdit() {
    this.f_firstPanel = true;
    this.f_secondPanel = false;
    this.selectedTrainer = null;
  }
  finishEdit() {
    this.f_firstPanel = true;
    this.f_secondPanel = false;
    const index = this.findIndexofTrainer();
    this.trainers[index] = this.selectedTrainer;
    this.updateTableTrainers();
    this.selectedTrainer = null;
  }
  findIndexofTrainer(): number {
    const index = this.trainers.
      findIndex(t => t.name === this.selectedTrainer.name);
    return index;
  }
  updateTableTrainers() {
    this.dsTrainers.data = this.trainers;
  }
}