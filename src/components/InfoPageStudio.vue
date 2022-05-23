<script setup></script>
<template>
  <div class="card-width">
    <q-card class="my-card" flat>
      <q-card-section horizontal>
        <q-card-section>
          <q-img class="col studio-image" src="../assets/0.jpg" />
        </q-card-section>

        <q-card-section>
          <div class="middle-text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus officiis temporibus provident incidunt ea reprehenderit
              aperiam excepturi quia, at autem praesentium vitae blanditiis! Ab
              error quod consequuntur vitae odit exercitationem
            </p>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-card class="team-members" flat>
      <q-card-section horizontal>
        <q-card-section>
          <q-img class="col team-image" src="../assets/1.jpg" />

          <div class="team-details">
            <p class="name">Mahmudul Haque Gani</p>
            <p class="designation">Principal Architect</p>
            <div class="social-align">
              <a href="https://www.instagram.com/hideself/"
                ><img class="social" src="../assets/INS.png"
              /></a>
              <a href="https://www.linkedin.com/in/kanakmahmud/"
                ><img class="social" src="../assets/Link.png"
              /></a>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-img class="col team-image" src="../assets/2.jpg" />

          <div class="team-details">
            <p class="name">Ahsan Habib</p>
            <p class="designation">Studio Head</p>
            <div class="social-align">
              <a href="https://www.instagram.com/ahsan_habib22/"
                ><img class="social" src="../assets/INS.png"
              /></a>
              <a href="https://www.linkedin.com/in/kanakmahmud/"
                ><img class="social" src="../assets/Link.png"
              /></a>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-img class="col team-image" src="../assets/3.jpg" />

          <div class="team-details">
            <p class="name">Argha Mitra Chowdhury</p>
            <p class="designation">Architect</p>
            <div class="social-align">
              <a href="https://www.instagram.com/argha_mitra_chowdhury/"
                ><img class="social" src="../assets/INS.png"
              /></a>
              <a href="https://www.linkedin.com/in/kanakmahmud/"
                ><img class="social" src="../assets/Link.png"
              /></a>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-img class="col team-image" src="../assets/4.jpg" />

          <div class="team-details">
            <p class="name">Khondokar Farhan Ishraq</p>
            <p class="designation">Designer</p>
            <div class="social-align">
              <a href="https://www.instagram.com/ig_frhn/"
                ><img class="social" src="../assets/INS.png"
              /></a>
              <a href="https://www.linkedin.com/in/kanakmahmud/"
                ><img class="social" src="../assets/Link.png"
              /></a>
            </div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-card class="team-members" flat>
      <q-card-section horizontal>
        <q-card-section>
          <q-img class="col team-image" src="../assets/5.jpg" />

          <div class="team-details">
            <p class="name">Muhammad Obaidulla</p>
            <p class="designation">Designer</p>
            <div class="social-align">
              <a href="https://www.instagram.com/oba_id_ullah/"
                ><img class="social" src="../assets/INS.png"
              /></a>
              <a href="https://www.linkedin.com/in/kanakmahmud/"
                ><img class="social" src="../assets/Link.png"
              /></a>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-img class="col team-image" src="../assets/6.jpg" />

          <div class="team-details">
            <p class="name">Ahmed Abid Rezwan</p>
            <p class="designation">Designer</p>
            <div class="social-align">
              <a href="https://www.instagram.com/abid_rezwan/"
                ><img class="social" src="../assets/INS.png"
              /></a>
              <a href="https://www.linkedin.com/in/kanakmahmud/"
                ><img class="social" src="../assets/Link.png"
              /></a>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-img class="col team-image" src="../assets/7.jpg" />

          <div class="team-details">
            <p class="name">Amdadul Haque Dipu</p>
            <p class="designation">Architect</p>
            <div class="social-align">
              <a href="https://www.instagram.com/hideself/"
                ><img class="social" src="../assets/INS.png"
              /></a>
              <a href="https://www.linkedin.com/in/kanakmahmud/"
                ><img class="social" src="../assets/Link.png"
              /></a>
            </div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap");
* {
  font-family: "Lato", sans-serif;
}
.studio-image {
  width: 15rem;
  height: 15rem;
}
.card-width {
  width: 50%;
  padding-top: 10rem;
}
.middle-text {
  padding-top: 3.5rem;
}
.my-card {
  transform: translate(28%, 0);
  margin-bottom: 60%;
}
.team-members {
  transform: translate(28%, 0);
  overflow-x: auto;
}
.team-image {
  width: 200px;
  height: 300px;
}
.team-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  margin: 0;
  padding: 0 4px 0 0;
  font-weight: 800;
  text-align: center;
}
.designation {
  margin: 0;
  padding: 0;
  text-align: center;
  color: rgb(105, 105, 105);
}
.social {
  width: 15px;
  height: 15px;
  text-align: center;
  display: block;
  margin-left: 6px;
  margin-top: 3px;
}
.social-align {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
